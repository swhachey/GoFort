import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List/list";
import DeleteBtn from "../components/DeleteBtn/Delete"
import ViewBtn from "../components/ViewBtn/viewbtn"

function Saved() {
const [cities, setCities] = useState([])

  useEffect(() => {
    loadCities()
  }, [])

  function loadCities() {
    API.getCities()
      .then(res => 
        setCities(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteCity(id) {
    API.deleteCity(id)
      .then(res => loadCities())
      .catch(err => console.log(err));
  };

    return (
        <div>
            <h3>Places I've Been</h3>
          {cities.length ? (
              <List>
                {cities.map(city => (
                  <ListItem key={city._id}>
                    <Link to={"/cities/" + city._id}>
                      <strong>
                        {city.city},  {city.country}
                      </strong>
                    </Link>
                    <div>
                    <ViewBtn link={"https://en.wikipedia.org/wiki/" + city.city}/>
                    <br/>
                  <DeleteBtn onClick={() => deleteCity(city._id)} />
                  </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    )
}

export default Saved