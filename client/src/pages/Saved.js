import React from "react";
import Jumbotron from "../components/Jumbotron";
import {SavedList} from "../components/SavedList";
import API from "../utils/API";

function Saved() {

  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
      loadbooks();
  }, []);

  function loadbooks() {
      API.savedBooks()
          .then(res => setBooks(res.data))
          .catch(err => console.log(err))
  };

  console.log("SAVED BOOKS: ", books)

  function handleBookDelete(id) {
      API.deleteBook(id)
          .then(res => loadbooks())
          .catch(err => console.log(err))

          console.log("Deletedbooks")
  };

  return (
      <div>
          <Jumbotron />
          <div className="container">
              <br />
              <div id="saved-return-section">
                  <h5>Saved Books:</h5>
                  {books.length ? (
                      books.map(book => (
                          <SavedList
                              key={book._id}
                              title={book.title}
                              authors={book.authors}
                              description={book.description}
                              image={book.image}
                              link={book.link}
                              onClick={() => handleBookDelete(book._id)}
                          />
                      ))
                  ) : (
                      <h5 className="center-align"><strong>No Results to Display</strong></h5>
                  )}
              </div>
              <br />
          </div>
      </div>
  )
}

export default Saved;