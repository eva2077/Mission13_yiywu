import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MovieList from "./Movies";
import Podcast from "./podcast";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Joel Hilton Movie Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/Podcast">
              Podcast
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
      </Routes>
    </>
  );
}

export default App;
