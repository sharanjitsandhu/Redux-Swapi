// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH });
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err
      });
    });
};
