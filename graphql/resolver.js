const axios = require("axios");

/*TODO: Look on what is DataLoader and why is it good , 
        Console log the differnce before and after 
*/

// SWAPI REST API endpoints
const URL = {
  planets: "http://swapi.dev/api/planets",
  people: "http://swapi.dev/api/people",
  starships: "http://swapi.dev/api/starships",
  films: "http://swapi.dev/api/films",
  species: "http://swapi.dev/api/species/",
  vehicles: "https://swapi.dev/api/vehicles/",
};

module.exports = {
  getFilms: async function (id) {
    try {
      const response = await axios.get(`${URL.films}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return {
        title: resData.title,
      };
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },

  getPlanets: async function (id) {
    try {
      const response = await axios.get(`${URL.planets}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return resData;
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },

  getSpiece: async function (id) {
    try {
      const response = await axios.get(`${URL.species}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return resData;
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },

  getVehicles: async function (id) {
    try {
      const response = await axios.get(`${URL.vehicles}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return resData;
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },

  getPeople: async function (id) {
    try {
      const response = await axios.get(`${URL.people}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return resData;
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },

  getStarShip: async function (id) {
    try {
      const response = await axios.get(`${URL.starships}/${id}`);
      console.log("response inside getFilmsById function: ", response);
      const resData = response.data;
      console.log("resData inside getFilmsById function: ", resData);
      return resData;
    } catch (err) {
      console.log("Error in axios.all in getFilmsById");
      throw err;
    }
  },
};
