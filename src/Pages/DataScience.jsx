import React from 'react';
import CardDisplay from "../Components/CardDisplay/CardDisplay";
import { Container, Row } from "react-bootstrap";

const DataScience = ({data}) => {
    const dscards = data.filter((e) => e.category === "datascience");
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {dscards.map((element, index) => {
            return <CardDisplay element={element} key={element.id} />;
          })}
        </Row>
      </Container>
    );
  };

export default DataScience;