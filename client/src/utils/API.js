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

  travelCity: function(id) {
    return axios.put("/api/cities/" + id, "traveled=true");
  },

  placesCity: function(query) {
    return axios.post("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+" + query + "&key=AIzaSyBPq0iNfSB-GG2vKi06_v7MvoEluekscfY");
  },

  saveCity: function(cityData) {
    return axios.post("/api/cities", cityData);
  },

   searchCity: function(query) {
    return axios.get("https://api.unsplash.com/search/photos?page=1&query=" + query + "&client_id=ZRUK3Uzv7SAiHnP1NJj-aSlj-rK1t9YHhge4J0wTVU0")
  }
};
