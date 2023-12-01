const axios = require("axios");

// SWAPI REST API endpoints
const URL = {
  planets: "http://swapi.dev/api/planets",
  people: "http://swapi.dev/api/people",
  starships: "http://swapi.dev/api/starships",
  films: "http://swapi.dev/api/films",
  species: "http://swapi.dev/api/species/",
  vehicles: "https://swapi.dev/api/vehicles/",
};

const resolvers = {
  Query: {
    getPeopleById: async function (parent, { id }) {
      try {
        const response = await axios.get(`${URL.people}/${id}`);
        
        const resData = response.json();

        return resData;

      } catch (err) {
        console.log("error in getPeopleById axios get: ", err);
        throw err;
      }
    },
  },
};

module.exports = resolvers;
