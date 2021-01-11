import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
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
      API.searchBooks(formObject.title).then((res) => { setsearchBooks(res.data.items) })
        .catch(err => console.log(err));
    }
  };

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

      <Container className="mb-4">
        {searchBooks.map((book) => (
          <Card style={{ width: "20rem", flexDirection: "row" }}>
            <Card.Img variant="top" src={book.volumeInfo.imageLinks?.thumbnail} />
            <Card.Body>
              <Card.Title>{book.volumeInfo.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.volumeInfo.authors}</Card.Subtitle>
              <Card.Text>{book.volumeInfo.description}</Card.Text>
              <Card.Text>Rate: {book.volumeInfo.averageRating}</Card.Text>
              <button>Save</button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Search;