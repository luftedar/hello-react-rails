import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function getThings() {
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST
    });
    return fetch('v1/things.json')
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error))
  };
};

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  };
};

class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingsList = [things].map((thing,i) => {
      return <li key={i}>{ thing.name }{thing.guid}</li>
    });
    return (
      <React.Fragment>
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>Click For Random Greeting</button>
        <br />
        <h1>{ thingsList }</h1>
      </React.Fragment>
    );
  };
};

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
