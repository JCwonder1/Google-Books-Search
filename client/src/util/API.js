import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
      console.log(id);
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookid) {
    return axios.post("/api/books/" + bookid);
  }
};
