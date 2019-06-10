const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require("../models/books");

router.get('/', async function(req, res, next){
    db.find({}, (error, response)=> {
        if (error) throw error;
        res.json(response);
    })
})

router.post('/:id', async function(req, res, next){
    let book = {}
    axios.get(`https://www.googleapis.com/books/v1/volumes/${req.params.id}`)
    .then(response => {
        book = {
          googleId: response.data.id,
          title: response.data.volumeInfo.title,
          authors: response.data.volumeInfo.authors,
          publisher: response.data.volumeInfo.publisher,
          publishedDate: response.data.volumeInfo.publishedDate,
          longDesc: response.data.volumeInfo.description.replace(
            /<\/?[^>]+(>|$)/g,
            ""),
          pageCount: response.data.volumeInfo.pageCount,
          avgRating: response.data.volumeInfo.averageRating,
          thumbnail: response.data.volumeInfo.imageLinks.smallThumbnail,
          url: response.data.volumeInfo.infoLink
        };
        

    })
    .then((response) =>{
        db.create(book, (err, res)=>{
            if (err) throw err
        })
        
    }).then(dbResponse => {
        res.json(dbResponse);
    })
    
})

router.delete("/:id", (req, res, next)=>{
    db.deleteOne({_id: req.params.id}, (err, response)=>{
        if (err) throw (err)
        res.json(response);
    })
})


module.exports = router;