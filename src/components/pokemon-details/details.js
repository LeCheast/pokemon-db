import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Table, Col } from 'react-bootstrap';
import './details.css';

import Description from '../Description/Description';

function Details() {
    let { id } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => setPokemonInfo(result.data))
    }, [id]);

    return(
        <div>
            { pokemonInfo &&
                <Container>
                    {
                        console.log(pokemonInfo)
                    }
                    <h1 style={{textAlign: "center"}}>{pokemonInfo.name.replace("-", " ").charAt(0).toUpperCase() + pokemonInfo.name.replace("-", " ").slice(1)} Details - #{pokemonInfo.id}</h1>   
                    <img style={{margin: "10px auto", display: "flex", width: "200px"}} src={pokemonInfo.sprites.other.dream_world.front_default} alt={`${pokemonInfo.name.replace("-", " ").charAt(0).toUpperCase() + pokemonInfo.name.replace("-", " ").slice(1)}`} />    
                    <div className="col-sm-6 offset-sm-3">
                        <Description id={pokemonInfo.id} types={pokemonInfo.types} />   
                    </div>
                    <Table striped bordered id="tableLarge">
                        <thead>
                            <tr>                           
                            {
                                pokemonInfo.stats.map(stat => {
                                    return(<th key={stat.stat.name} className="center-table-elements">
                                        {stat.stat.name.toUpperCase()}
                                    </th>);
                                })
                            }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            {
                                pokemonInfo.stats.map(stat => {
                                    return <td key={stat.stat.name} className="center-table-elements">{stat.base_stat}</td>
                                })
                            }
                            </tr>
                        </tbody>
                    </Table>
                    <Row id="mobileTable">
                        <Col>
                            {
                                pokemonInfo.stats.map(stat => {
                                    return(<div key={stat.stat.name}>
                                        <h4>{stat.stat.name.toUpperCase()}</h4>
                                        <p>{stat.base_stat}</p>
                                        <hr />
                                    </div>)
                                })
                            }
                        </Col>
                    </Row>
                    <h2>Moves</h2>
                    <div id="moves">
                    {
                        pokemonInfo.moves.map((move) => {
                            return (
                                <p key={move.move.name}>{move.move.name.toUpperCase().replace("-", " ")}</p>
                            )
                        })
                    }
                    </div>
                </Container>
            }
        </div>
    );
}

export default Details;