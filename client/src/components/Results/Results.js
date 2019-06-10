import React from 'react';

function Results ({items, hasError, starred, handleSave, saved}){
    if(items && !starred){
    return (
        
      <div className="container id=top">
          {saved ? <div className="alert alert-success"     role="alert">
            Book Saved!
        </div> : ""}
          
        {items.map(items => (
          <div
            key={items.id}
            className="card text-left mb-4 border-primary"
          >
            <h5 className="card-header">{items.volumeInfo.title}</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <p className="author">
                    Author(s):
                    {items.volumeInfo.authors.map(author => (
                      <p className="authors-loop">{author}</p>
                    ))}
                  </p>
                  <img
                    className="book-image"
                    src={items.volumeInfo.imageLinks.smallThumbnail}
                  />
                </div>
                <div className="col-10 text-left">
                  <p className="card-text">
                    {
                      (items.searchInfo.textSnippet = undefined
                        ? "No Description ar this time."
                        : items.searchInfo.textSnippet)
                    }
                  </p>
                  <a
                    href={items.volumeInfo.canonicalVolumeLink}
                    className="btn btn-primary"
                  >
                    Go to Book
                  </a>
                  <a
                    onClick={handleSave}
                    data-key={items.id}
                    className="ml-2 btn btn-success"
                    href="#top"
                  >
                    Save Book
                  </a>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-2 mt-2 ml-2">
                 return ({for (var i = 0; i < items.volumeInfo.averageRating; i++){<i className="fas fa-star text-primary" /> }})

                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );}
    if(starred){
        return null;
    }

    if(hasError){

        return(
        <div className="container">
            <h1>Please search a book.</h1>
        </div>)
    }else{
        return (
        <div className="container">
            <h1>Please search a book.</h1>
        </div>

        )
    }

}

export default Results

