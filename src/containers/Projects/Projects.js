import React from "react";

import Loading from "../../components/Loading";
// import styles from './styles.css';
import ProjectList from "../../components/ProjectList";

const Projects = ({ projectsData, isLoading }) => {
  return projectsData.length > 0 ? (
    <ProjectList projectsData={projectsData} isLoading={isLoading} />
  ) : (
      <Loading />
    );
};

export default Projects;
