import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { connect } from "react-redux";
import { fetchBooster, selectSet } from "../actions/actions";
import Set from "../components/Set";

const Toolbar = (props) => {
  const selectSet = (evt) => {
    props.selectSet(evt.target.name);
  };

  return (
    <Navbar>
      <Navbar.Brand>MTG Dex</Navbar.Brand>
      <Form inline>
        <Dropdown as={ButtonGroup}>
          <Button onClick={() => props.fetchBooster(props.selectedSet)}>
            Get a Booster Pack!
          </Button>
          <Dropdown.Toggle split />
          <Dropdown.Menu>
            {props.sets.map((set) => (
              <Set
                key={set.code}
                set={set}
                onClick={selectSet}
                active={set.code === props.selectedSet}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  const { sets, selectedSet } = state;
  return { sets, selectedSet };
};

export default connect(mapStateToProps, { fetchBooster, selectSet })(Toolbar);
