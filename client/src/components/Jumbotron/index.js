import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./style.css";

function MainJumbotron() {
    return (
        <Jumbotron
            fluid
            className="my-3 herobanner"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/banner.jpg"})`,
            }}
        >
            <Container className="text-center">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Search for and Save Books of Interest</p>
            </Container>
        </Jumbotron>
    );
}

export default MainJumbotron;