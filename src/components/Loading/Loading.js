import React, { Component } from "react";
import "./styles.css";
import CircularProgress from "material-ui/CircularProgress";

class Loading extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="loadingContainer">
        <div className="">
          <CircularProgress size={150} thickness={10} />
        </div>
        <div className="" />
      </div>
    );
  }
}

export default Loading;
