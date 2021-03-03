import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { openBooster } from "../actions/actions";
import Card from "../components/Card";

const CardLibrary = (props) => {
  return (
    <Container>
      {props.booster && (
        <Button onClick={() => props.openBooster()}>
          Open Booster Pack!!!
        </Button>
      )}
      {props.cards.map((card) => (
        <Card card={card} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  let { cards, booster } = state;
  return { cards, booster };
};

export default connect(mapStateToProps, { openBooster })(CardLibrary);
