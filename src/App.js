import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
//import Projects from "./containers/Projects";
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
          {/* <MuiThemeProvider> */}
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/showcase" component={ProjectList} />
                <Route exact path="/resume" component={Resume} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          {/* </MuiThemeProvider> */}
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
