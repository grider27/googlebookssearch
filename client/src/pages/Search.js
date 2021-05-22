import React, { useState } from "react";
import API from "../utils/API";
import MainJumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "../components/BookCard";

function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.getBooks(query)
            .then((res) => {
                setBooks(res.data.items);
            })
            .catch((err) => console.log(err));
    }

    function saveBook(id) {
        const book = books.find((book) => book.id === id);
        if (book.volumeInfo.authors === undefined) {
            book.volumeInfo.authors = ["Unknown author"];
        }
        if (typeof (book.volumeInfo.imageLinks) === "undefined") {
            let val = `${process.env.PUBLIC_URL + "/image-not-found.png"}`;
            book.volumeInfo.imageLinks = { thumbnail: val };
        }

        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
        })
            .then((res) => {
                console.log("Book Saved!")
            })
            .catch((err) => console.log(err.response));
    }

    return (
        <Container fluid>
            <MainJumbotron />
            <SearchBar
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />
            <Container fluid id="book-box">
                <Row>
                    <h6>Results</h6>
                </Row>
                <Row>
                    {books.map((book) => (
                        <BookCard
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            image={
                                book.volumeInfo.imageLinks
                                    ? book.volumeInfo.imageLinks.thumbnail
                                    : `${process.env.PUBLIC_URL + "/image-not-found.jpg"}`
                            }
                            link={book.volumeInfo.infoLink}
                            onClick={() => saveBook(book.id)}
                            label="Save"
                            bgColor="#f4a451"
                        />
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Search;