import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MainJumbotron from "../components/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "../components/BookCard";

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadSavedBooks();
    }, []);

    function loadSavedBooks() {
        API.getSavedBooks()
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err));
    }

    function deleteBook(book) {
        API.deleteBook(book._id)
            .then((res) => {
                console.log("Book deleted");
                loadSavedBooks();
            })
            .catch((err) => console.error(err));
    }

    return (
        <Container fluid>
            <MainJumbotron />
            <Container fluid id="book-box">
                <Row>
                    <h6>Saved Books</h6>
                </Row>
                <Row>
                    {books.map((book) => (
                        <BookCard
                            key={book._id}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                            onClick={() => deleteBook(book)}
                            label="Delete"
                            bgColor="#AC3117"
                            display="none"
                        ></BookCard>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Saved;