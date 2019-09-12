import { combineReducers } from "redux";
//import ProjectsReducer from "../redux/modules/projects";
import SelectedReducer from "../redux/modules/selected";

export default combineReducers({
  // projects: ProjectsReducer,
  selectedStackName: SelectedReducer
});
