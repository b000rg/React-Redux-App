import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { fetchSets } from "./actions/actions";
import CardLibrary from "./containers/CardLibrary";
import Toolbar from "./containers/Toolbar";

const App = (props) => {
  useEffect(() => {
    props.fetchSets();
  }, []);

  return (
    <Container>
      <Toolbar />
      <CardLibrary />
    </Container>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { fetchSets })(App);
