const GET_SELECTED_STACK = "GET_SELECTED_STACK";

export const getSelectedStack = selectedStackName => {
  return {
    type: GET_SELECTED_STACK,
    payload: selectedStackName
  };
};

export default (state = "react", action) => {
  switch (action.type) {
    case GET_SELECTED_STACK:
      return action.payload;

    default:
      return state;
  }
};
