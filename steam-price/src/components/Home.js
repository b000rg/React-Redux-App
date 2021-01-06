import React, { useState } from "react";
import { searchFor, getList } from "../reducers/actions";
import { BasicSearchBar, SearchButton, Button } from "../assets/style";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = ({ searchFor, getList }) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSearch = () => {
    searchFor(search);
    setSearch("");
  };

  const handleGetList = () => {
      getList();
      history.push('/game-list');
  };

  return (
    <div>
      <h2>Steam Price Lookup</h2>
      <div>Search for a game below</div>
      <BasicSearchBar type="text" value={search} onChange={handleChange} />
      <SearchButton type="button" onClick={handleSearch} />
      <Button type="button" onClick={handleGetList}>Or click here to see a list</Button>
    </div>
  );
};

export default connect(null, { searchFor, getList })(Home);
