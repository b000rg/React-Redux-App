import {
  ERROR,
  FETCHING_BOOSTER,
  FETCHING_SETS,
  GOT_BOOSTER,
  GOT_SETS,
  OPEN_BOOSTER,
  SELECT_SET,
} from "../actions/actions";

export const initialState = {
  sets: [],
  cards: [],
  booster: [],
  selectedSet: null,
  loading: false,
  errors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCHING_SETS || FETCHING_BOOSTER:
      return { ...state, loading: true };
    case GOT_SETS:
      return { ...state, sets: cleanupSetData(action.payload) };
    case SELECT_SET:
      return action.payload === state.selectedSet
        ? state
        : { ...state, selectedSet: action.payload };
    case GOT_BOOSTER:
      return { ...state, booster: action.payload };
    case OPEN_BOOSTER:
      let cards = [...state.booster, ...state.cards];
      return { ...state, cards, booster: [] };
    case ERROR:
      return { ...state, errors: [...state.errors, action.payload] };
    default:
      return state;
  }
};

const cleanupSetData = (data) => {
  return data.map((set) => {
    let { code, name } = set;
    return { code, name };
  });
};

export default reducer;
