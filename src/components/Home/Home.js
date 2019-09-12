import React, { Component } from "react";
import "./styles.css";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homePage">
        <h1 className="nameHomePage">Mahreen Qureshi</h1>
        <h4 className="wdHomePage"> Web Developer </h4>
        <p className="hidePara">
          I am a web developer enthusiastic about building innovative products.
          Through various ventures, I discovered a passion for coding
          (especially in React &amp; React Native), building creative designs
          and watching them come to life.
        </p>
      </div>
    );
  }
}

export default Home;
