import React from "react";
import "./styles.css";
// import { CardTitle } from "material-ui/Card";

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

import FontAwesome from "react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = ({ project }) => {
  const flexGroup = project.id % 2 === 0 ? "row" : "rowReverse";
  const pictures = project.pictures;

  return (
    <div className="singleProject">
      <Card className="projectCard" style={style.projectCard}>

        <Typography style={style.title}>
          {project.title}
        </Typography>
        <Typography style={style.tools}>
          {project.tools.map((tool, i) => {
            return `${tool}${project.tools.length - 1 === i ? "" : ",   "}`;
          })}
        </Typography>


        <div className={flexGroup}>
          <Carousel className="carouseldiv" autoPlay>
            {pictures.map(picture => {
              return (
                <div className="selectedImageDiv" key={picture}>
                  <img
                    alt="screenshot of project"
                    className="selectedImagePic"
                    src={picture}
                  />
                </div>
              );
            })}
          </Carousel>

          <div className="descPortfolioDiv">
            <Typography className="description" style={style.description}>
              <span className="greyFont">ASK:</span> {project.ask}
            </Typography>
            <Typography className="description" style={style.description}>
              <span className="greyFont">FINISHED PRODUCT:</span>
              {project.result}
            </Typography>

            <CardActions style={style.buttons}>
              {project.git_url ? (
                <a target="_blank" style={style.buttons} href={project.git_url}>
                  <FontAwesome name=" fa-github" />{" "}
                </a>
              ) : null}
              {project.url ? (
                <a target="_blank" style={style.linkButton} href={project.url}>
                  <FontAwesome name=" fa-mouse-pointer" />
                </a>
              ) : null}
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Project;

const style = {
  projectCard: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: "rgba(33, 2, 26, 0.781)",
    border: "none",
    margin: 5,
    fontFamily: "Raleway"
  },
  title: {
    fontSize: "1.8em",
    fontWeight: 500,
    color: "#9E9E9E",
    borderBottom: 2,
    fontFamily: "Raleway"
  },
  tools: {
    fontSize: "1.1em",
    fontWeight: 500,
    color: "#1DE9B6",
    fontFamily: "Raleway"
  },
  description: {
    lineHeight: 1.5,
    color: "#EEEEEE"
  },
  buttons: {
    color: "#1DE9B6",
    fontSize: "1.5em",
    textDecoration: "none",
    padding: 15
  },
  linkButton: {
    color: "#1DE9B6",
    fontSize: "1.2em",
    textDecoration: "none",
    padding: 15
  }
};
