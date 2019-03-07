import {
  FETCH,
  SUCCESS,
  FAILURE
} from "../actions";
const initialState = {
  fetching: false,
  characters: [],
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    
    case FETCH:
      return { ...state, fetching: true };
    case FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};
