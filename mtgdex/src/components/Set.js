import React from "react";
import DropdownItem from "react-bootstrap/DropdownItem";

const Set = (props) => {
  return (
    <DropdownItem
      active={props.active}
      onClick={props.onClick}
      name={props.set.code}
    >
      {props.set.code} - {props.set.name}
    </DropdownItem>
  );
};

export default Set;
