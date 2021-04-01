import axios from "axios";

export default {
  getCities: function() {
    return axios.get("/api/cities");
  },

  getCity: function(id) {
    return axios.get("/api/cities/" + id);
  },
  
  deleteCity: function(id) {
    return axios.delete("/api/cities/" + id);
  },

  saveCity: function(cityData) {
    return axios.post("/api/cities", cityData);
  },

   searchCity: function(query) {
    return axios.get("http://geodb-cities-api.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=" + query)
  }
};
