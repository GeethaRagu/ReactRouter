import React from 'react';
import CardDisplay from "../Components/CardDisplay/CardDisplay";
import { Container, Row } from "react-bootstrap";

const Career = ({data}) => {
    const careercards = data.filter((e) => e.category === "career");
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {careercards.map((element, index) => {
            return <CardDisplay element={element} key={element.id} />;
          })}
        </Row>
      </Container>
    );
  };

export default Career;