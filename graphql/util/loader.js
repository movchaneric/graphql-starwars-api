const axios = require("axios");

module.exports = (urls) => {
  //   console.log("ids: " + ids);
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