
const initialState = 0;

export const changeNumber = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      // (How to do)
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}
