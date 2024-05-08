import React from "react";
import { Card, CardFooter, Col } from "react-bootstrap";

const CardDisplay = ({ element }) => {
  return (
    <Col key={element.id}>
      <Card>
        <Card.Img variant="top" src={element.image}></Card.Img>
        <Card.Body>
          <Card.Title>{element.content}</Card.Title>
          <Card.Text>{element.author}</Card.Text>
        </Card.Body>
        <CardFooter>{element.date}</CardFooter>
      </Card>
    </Col>
  );
};

export default CardDisplay;
