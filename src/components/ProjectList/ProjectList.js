import React, { Component } from "react";
import "./styles.css";
import Project from "../Project";
import * as selectedAction from "../../redux/modules/selected";
// import Button from "material-ui/Button";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import projectData from "./project-data";

class ProjectList extends Component {
  render() {
    const selectedStack = this.props.selectedStackName;
    const btn = {
      margin: 5,
      backgroundColor: "white"
    };
    const selectedBtn = {
      backgroundColor: "#1DE9B6"
    }

    return (
      <div>
        <div className="projectsBanner">
          <h1> SHOWCASE </h1>
        </div>
        <div className="projectCardList">
          <div className="buttonGroup">
            <Button
              variant="contained"
              onClick={() => this.props.getSelectedStack("react")}
              style={
                selectedStack === "react" ? selectedBtn : btn
              }
            >
              React &amp; React Native
            </Button>

            <Button
              variant="contained"
              onClick={() => this.props.getSelectedStack("wordpress")}
              style={
                selectedStack === "wordpress" ? selectedBtn : btn
              }
            >
              Wordpress
            </Button>

            <Button
              variant="contained"
              onClick={() => this.props.getSelectedStack("other")}
              style={
                selectedStack === "other" ? selectedBtn : btn
              }
            >
              Misc
            </Button>

            <Button
              variant="contained"
              onClick={() => this.props.getSelectedStack("")}
              style={
                selectedStack === "" ? selectedBtn : btn
              }
            >
              View all
            </Button>





          </div>

          {projectData.map(project => {
            return selectedStack === "" ? (
              <Project key={project.id} project={project} />
            ) : project.stack === selectedStack ? (
              <Project key={project.id} project={project} />
            ) : null;
          }).reverse()}


        </div>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return { selectedStackName: state.selectedStackName };
};
export default connect(mapStateToProps, selectedAction)(ProjectList);
