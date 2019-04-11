import { FETCH, SUCCESS, FAILURE } from "../actions";
const initialState = {
  fetching: false,
  characters: [],
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("charsReducer:", action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCH, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH:
      return { ...state, fetching: true, error: "" };
    case FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false,
        error: ""
      };
    default:
      return state;
  }
};
