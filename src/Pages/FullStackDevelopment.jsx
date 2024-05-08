import React from "react";
import CardDisplay from "../Components/CardDisplay/CardDisplay";
import { Container, Row } from "react-bootstrap";

const FullStackDevelopment = ({ data }) => {
  const fsdcards = data.filter((e) => e.category === "fullstackdevelopment");
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {fsdcards.map((element, index) => {
          return <CardDisplay element={element} key={element.id} />;
        })}
      </Row>
    </Container>
  );
};

export default FullStackDevelopment;
