import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card as CardBS } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Description from '../Description/Description';

function Card({ url }) {
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(() =>{
        axios.get(url).then(result => setPokemonInfo(result.data));
    }, [url]);

    return(
    <div>
    {   pokemonInfo.sprites && (
        <CardBS style={{marginTop: "20px"}}>
            <LazyLoad once={true}>
                <CardBS.Img style={{height: "200px"}} variant="top" src={pokemonInfo.sprites.other.dream_world.front_default} />
            </LazyLoad>
            <CardBS.Body>
            <CardBS.Title>{pokemonInfo.name.replace("-", " ").charAt(0).toUpperCase() + pokemonInfo.name.replace("-", " ").slice(1)}    #{pokemonInfo.id}</CardBS.Title>
                <CardBS.Text>
                {   pokemonInfo.sprites && (                    
                    <Description key={pokemonInfo.order} id={pokemonInfo.id} types={pokemonInfo.types}/>
                    )}
                </CardBS.Text>
                <Button href={`/${pokemonInfo.name}/${pokemonInfo.id}`} style={{width: "100%"}} variant="primary">Learn More</Button>
            </CardBS.Body>
        </CardBS>
    )}
    </div>
    );
}

export default Card;