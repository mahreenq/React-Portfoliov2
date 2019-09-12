import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";
import ProjectList from "./components/ProjectList";

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/showcase" component={ProjectList} />
              <Route exact path="/resume" component={Resume} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
