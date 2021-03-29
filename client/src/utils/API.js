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
  }
};
