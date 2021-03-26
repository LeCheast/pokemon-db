import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PokemonCard from '../pokemon-card/card';
import { Col, Container, Row } from 'react-bootstrap';

function List() {
    const [pokemon, setPokmeon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) => {
            setPokmeon(response.data.results);
        });
    },[]);

    return(
        <Container>
            <Row>
            {
                pokemon.map((pokemon) => {
                    return(
                            <Col key={pokemon.name} sm={4}>
                                <PokemonCard url={pokemon.url} />
                            </Col>
                )})
            }
            </Row>
        </Container>
    );
}

export default List;