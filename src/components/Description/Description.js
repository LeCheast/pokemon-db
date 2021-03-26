import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Description({ id, types }) {
    const [newTypes, setNewTypes] = useState([]);

    useEffect(() => {
        types.map((type) => {
            var newType = {
                slot: type.slot,
                name: type.type.name.toUpperCase(),
                color: GetTypeColor(type.type.name.toLowerCase())
            }
            setNewTypes(newTypes => [...newTypes, newType]);
            return "";
        });
    }, [types]);

    const GetTypeColor = (typeName) => {
        switch(typeName) {
            case "normal":
                return "lightgray";
            case "fighting":
                return "#b96338";
            case "flying":
                return "blue";
            case "poison":
                return "purple";
            case "ground":
                return "brown";
            case "rock":
                return "gray";
            case "bug":
                return "green";
            case "ghost":
                return "purple";
            case "steel":
                return "gray";
            case "fire":
                return "red";
            case "water":
                return "blue";
            case "grass":
                return "#77c177";
            case "electric":
                return "#cdcd00";
            case "psychic":
                return "purple";
            case "ice":
                return "blue";
            case "dragon":
                return "yellow";
            case "dark":
                return "red";
            case "fairy":
                return "pink";
            case "unknown":
                return "gray";
            case "shadow":
                return "gray";
            default:
                return "white";
        }
    }

    return(
        <div>
            <Row>
            {
                newTypes.map((type) => {
                    return(
                        <Col key={id + type.slot} sm={newTypes.length === 2 ? "6" : "4"}>
                            <p style={{fontSize: "12px", margin: "3px 0", textAlign: "center", width: "100%",borderRadius: "5px", padding: "5px", color: "white", backgroundColor: type.color}}>{type.name}</p>
                        </Col>
                    );
                })
            }
            </Row>
        </div>
    );
}

export default Description;