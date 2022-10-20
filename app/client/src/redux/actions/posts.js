import API from "../.././api"
export const setLoaded = (payload) => ({
  type: "SET_LOADED_POSTS",
  payload,
});

export const setItems = (items) => ({
  type: "SET_POSTS",
  payload: items,
});

export const fetchAllPosts = () => (dispatch) => {
  dispatch(setLoaded(false));
  API
    .get("post/details/all")
    .then(({ data }) => {
      dispatch(setItems(data));
    })
};
