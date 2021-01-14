import React, { useState } from "react";
import { Container, Card, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

const Search = (props) => {
  const [formObject, setFormObject] = useState({})
  const [searchBooks, setsearchBooks] = useState([])
  // Handles updating component state when the user types into the input field

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })

  };
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBooks(formObject.title).then((res) => {
        setsearchBooks(res.data.items)
      }).catch(err => console.log(err));
    }
  };

  const onSaveBook = (id) => {
    console.log("TARGET BOOK ID: ", id);
    const targetBook = book.find((book) => book.id === id);
    const bookId = targetBook.id;
    console.log("TARGET BOOK: ", targetBook);
    const title = targetBook.volumeInfo.title;
    console.log("TARGET BOOK TITLE: ", title);
    const authors = targetBook.volumeInfo.authors;
    console.log("TARGET BOOK AUTHORS: ", authors);
    const description = targetBook.volumeInfo.description;
    console.log("TARGET BOOK DESC: ", description);
    const image = targetBook.volumeInfo.imageLinks.thumbnail;
    console.log("TARGET BOOK IMG: ", image);
    const link = targetBook.volumeInfo.infoLink;
    console.log("TARGET BOOK LINK: ", link);

    API.saveBook({
      id: bookId,
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    })
  }
    return (
      <div>
        <Jumbotron title={props.title} />
        <Container className="mb-4">

          <form>
            <input
              onChange={handleInputChange}
              name="title"
              placeholder="Title, Author"
            />
            <button
              disabled={!(formObject.title)}
              onClick={handleFormSubmit}>
              Search Book
            </button>
          </form>

        </Container>

        <Container className="mb-8">
          {searchBooks.map((book) => (
            <Card style={{ width: "100%", flexDirection: "row" }}>
              <Card.Img style={{ width: "15rem" }} variant="top" src={book.volumeInfo.imageLinks?.thumbnail} />
              <Card.Body style={{ width: "100%", flexDirection: "row" }}>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.volumeInfo.authors}</Card.Subtitle>
                <Card.Text>{book.volumeInfo.description}</Card.Text>
                <Card.Text>Rate: {book.volumeInfo.averageRating}</Card.Text>
                <button
                  onClick={() => onSaveBook(book.id)}>
                  Save</button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    );
  };
export default Search;