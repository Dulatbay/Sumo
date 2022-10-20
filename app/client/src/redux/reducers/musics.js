const initialState = {
  items: [],
  isLoaded: false,
};

const musics = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MUSICS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED_MUSICS":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default musics;
