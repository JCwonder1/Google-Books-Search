import React from "react";

function Starred(props){
  if(!props.starred){
    return null
  }
  if (props.books.length <= 0) {
    return (
      <div className="container">
        <h5>No books saved.</h5>
      </div>
    );
  }

    return (
      <div className="container">
        {props.books.map(book => (
          <div
            className="card mb-4 border-primary"
            key={book._id}
            data-id={book._id}
          >
            <h5 className="card-header text-left bg-primary text-white">
              {book.title}

              <a
                href=""
                className="float-right text-white"
                onClick={props.handleDeleteBook}
                data-id={book._id}
              >
                <i class="fas fa-trash-alt" />
              </a>
            </h5>

            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <p className="author">
                    Author(s):
                    {book.authors.map(author => (
                      <p className="authors-loop">{author}</p>
                    ))}
                  </p>
                  <img src={book.thumbnail} className="book-image" />
                  <p className="mt-4 rating">
                    User Rating: {book.avgRating}
                  </p>
                </div>
                <div className="col-10 text-left">
                  <h5 className="card-title">Description:</h5>
                  {book.longDesc}
                  <hr />
                  <h5 className="mt-4 card-title">Book Info:</h5>

                  <p className="book-info">Publisher: {book.publisher}</p>
                  <p className="book-info">
                    Published Date: {book.publishedDate}
                  </p>
                  <p className="book-info">Page Count: {book.pageCount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    
}

export default Starred;