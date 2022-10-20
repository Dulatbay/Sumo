import API from "../../api";

export const setLoaded = (payload) => ({
  type: "SET_LOADED_MUSICS",
  payload,
});

export const fetchMusicsByTitle = (title) => (dispatch) => {
  dispatch(setLoaded(false));
  API.get(`music/search?title=${title}`).then((j) => {
    console.log(j);
  });
};

export const fetchAllMusics = () => (dispatch) => {
  dispatch(setLoaded(false));
  API.get("music/all").then(({ data }) => {
    setItems(data);
    console.log(data);
  });
};

export const setItems = (items) => ({
  type: "SET_MUSICS",
  payload: items,
});
