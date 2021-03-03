import Axios from "axios";
const axios = Axios.create({ baseURL: "https://api.magicthegathering.io/v1" });

export const ERROR = "ERROR";

export const FETCHING_SETS = "FETCHING_SETS";
export const GOT_SETS = "GOT_SETS";
export const fetchSets = () => (dispatch) => {
  dispatch({ type: FETCHING_SETS });
  axios
    .get("/sets?pageSize=20")
    .then((res) => {
      dispatch({ type: GOT_SETS, payload: res.data.sets });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const FETCHING_BOOSTER = "FETCHING_BOOSTER";
export const GOT_BOOSTER = "GOT_BOOSTER";
export const fetchBooster = (id) => (dispatch) => {
  dispatch({ type: FETCHING_BOOSTER });
  axios
    .get(`/sets/${id}/booster`)
    .then((res) => {
      dispatch({ type: GOT_BOOSTER, payload: res.data.cards });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const SELECT_SET = "SELECT_SET";
export const selectSet = (id) => {
  return { type: SELECT_SET, payload: id };
};

export const OPEN_BOOSTER = "OPEN_BOOSTER";
export const openBooster = () => {
  return { type: OPEN_BOOSTER };
};
