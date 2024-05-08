import React from "react";
import CardDisplay from "../Components/CardDisplay/CardDisplay";
import { Container, Row } from "react-bootstrap";

const CyberSecurity = ({data}) => {
  const cycards = data.filter((e) => e.category === "cybersecurity");
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {cycards.map((element, index) => {
          return <CardDisplay element={element} key={element.id} />;
        })}
      </Row>
    </Container>
  );
};

export default CyberSecurity;
