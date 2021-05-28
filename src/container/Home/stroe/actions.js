import axios from "axios";

const updateHomeList = (data) => ({
  type: "update-home-list",
  list: data,
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstence) => {
    return axiosInstence.get("/api/breeds/image/random").then((res) => {
      const data = res.data.message;
      const arr = new Array(5).fill(data);
      dispatch(updateHomeList(arr));
    });
  };
};
