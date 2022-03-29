import React from "react"
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import HelloWorld from './HelloWorld';
import configureStore from '../configureStore';
import { Provider } from "react-redux";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={() => <HelloWorld/>}/>
          </Switch>
        </BrowserRouter>
      </Provider> 
    );
  }
}

export default App
