import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <h2>Fetching star wars characters</h2>
          {this.props.fetching && (
            <Loader type="ThreeDots" color="#35A7FF" height={100} width={100} />
          )}
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  //console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { getCharacters /* action creators go here */ }
)(CharacterListView);
