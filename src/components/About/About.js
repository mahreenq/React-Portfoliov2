import React, { Component } from "react";
import "./styles.css";
// import { Card, CardText } from "material-ui/Card";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const styles = {
  aboutCard: {
    padding: 20,
    backgroundColor: "rgba(33, 2, 26, 0.781)",
    display: "flex",
    flexDirection: "column"
  },
  aboutText: {
    padding: 15,
    textAlign: "center",
    color: "#1DE9B6",
    fontSize: "1.2em",
    fontFamily: "Raleway"
  },
  aboutToolbox: {
    padding: 15,
    textAlign: "center",
    color: "#BDBDBD",
    fontSize: "1em",
    fontFamily: "Raleway",
    display: "flex",
    justifyContent: "space-around"
  }
};

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="aboutPage">
        <div className="banner">
          <h1> ABOUT </h1>
        </div>

        <Card className="aboutCard" style={styles.aboutCard}>
          <div className="aboutPic">
            <div className="aboutPicture"> </div>
            <div className="cardBio">
              <Typography style={styles.aboutText}>
                Hey there! I am a web developer enthusiastic about building
                innovative products.
              </Typography>
              <Typography className="aboutText" style={styles.aboutText}>
                Within my career, I am most interested in working with clients to support
                products that contribute to technological advancements.
              </Typography>
              <Typography className="aboutText" style={styles.aboutText}>
                Through various ventures, I discovered a passion for data analytics, coding and all things digital.
              </Typography>
            </div>
          </div>

          <Typography
            style={{
              padding: 15,
              textAlign: "center",
              color: "#EEEEEE",
              fontSize: "1.2em",
              fontFamily: "Raleway"
            }}
          >
            Current Toolbox
          </Typography>

          <div className="aboutToolbox" style={styles.aboutToolbox}>
            <div className="singleToolbox">
              <i className="devicon-html5-plain toolboxIcon" /> HTML5
            </div>
            <div className="singleToolbox">
              <i className="devicon-css3-plain toolboxIcon" /> CSS3
            </div>
            <div className="singleToolbox">
              <i className="devicon-javascript-plain toolboxIcon" />Javascript
            </div>
            <div className="singleToolbox">
              <i className="devicon-jquery-plain toolboxIcon" /> JQuery
            </div>
            <div className="singleToolbox">
              <i className="devicon-sass-original toolboxIcon" />SASS
            </div>
          </div>

          <div className="aboutToolbox" style={styles.aboutToolbox}>
            <div className="singleToolbox">
              <i className="devicon-php-plain toolboxIcon" />PHP
            </div>
            <div className="singleToolbox">
              <i className="devicon-wordpress-plain toolboxIcon" /> Wordpress
            </div>
            <div className="singleToolbox">
              <i className="devicon-github-plain  toolboxIcon" />Github
            </div>
            <div className="singleToolbox">
              <i className="devicon-gulp-plain toolboxIcon" />Gulp
            </div>
            <div className="singleToolbox">
              <i className="devicon-react-original toolboxIcon" />React
            </div>
          </div>

          <div className="aboutToolbox" style={styles.aboutToolbox}>
            <div className="singleToolbox">
              <i className="devicon-nodejs-plain toolboxIcon" />Node.js
            </div>
            <div className="singleToolbox">
              <i className="devicon-express-original toolboxIcon" />Express
            </div>
            <div className="singleToolbox">
              <i className="devicon-postgresql-plain toolboxIcon" />PostgreSQL
            </div>
            <div className="singleToolbox">
              <i className="devicon-mongodb-plain toolboxIcon" />MongoDB
            </div>
            <div className="singleToolbox">
              <i className="devicon-meteor-plain toolboxIcon" />Meteor
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
