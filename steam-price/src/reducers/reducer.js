import {FETCH_LIST_FAIL, FETCH_LIST_START, FETCH_LIST_SUCCESS} from './actions';

const defaultState = {
    fetching: false,
    list: [],
    searchText: '',
    error: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LIST_START:
        return {
            ...state,
            fetching: true
        };
    case FETCH_LIST_SUCCESS:
        return {
            ...state,
            fetching: false,
            list: action.payload
        };
    case FETCH_LIST_FAIL:
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
