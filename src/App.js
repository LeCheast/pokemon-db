import React from 'react';
import logo from './pokemon-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav, Navbar } from 'react-bootstrap';
import './App.css';

import PokemonList from './components/pokemon-list-view/list';
import PokemonDetails from './components/pokemon-details/details';

function App() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><img id="pokemonLogo" alt="Pokemon Logo" src={logo} /></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
      <div id="marginDiv" style={{marginTop: "70px"}}></div>

    <Router>
      <Switch>
        <Route exact path="/">
            <PokemonList />
        </Route>
        <Route path="/:pokemonName/:id">
            <PokemonDetails />
        </Route>
      </Switch>
    </Router>
    </div>    
  );
}

export default App;