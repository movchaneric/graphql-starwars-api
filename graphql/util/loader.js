const axios = require("axios");

const getFilteredData = (urls) => {
  // console.log("urls are : " , urls);
  return axios.all(
    urls.map((url) => {
      return axios
        .get(url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log("error fetching .get: ", err));
    })
  );
};

const getHomeWorld = (parent) => {
  return axios
    .get(parent.homeworld)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("Error getting singleItem:", err));
};

module.exports = {
  getFilteredData,
  getHomeWorld,
};
