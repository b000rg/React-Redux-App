import axios from "axios";

export const SEARCH = "SEARCH";
export const searchFor = (searchText) => {
  return { type: SEARCH, payload: searchText };
};

export const FETCH_LIST_START = "FETCH_LIST_START";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAIL = "FETCH_LIST_FAIL";
export const getList = () => (dispatch) => {
  dispatch({ type: FETCH_LIST_START });
  axios
    .get("https://www.cheapshark.com/api/1.0/deals?storeID=1")
    .then((res) => {
      dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_LIST_FAIL, payload: err });
    });
};
