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
        {
          console.log(res)
          setCities(res.data.filter(city => city.traveled))}
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
                    <img src={city.info} alt={city.city}/>
                    <br/>
                    <Link to={"/cities/" + city._id}>
                      <strong>
                        {city.city},  {city.country}
                      </strong>
                    </Link>
                    <div>
                    <ViewBtn link={"https://en.wikipedia.org/wiki/" + city.city} use="MORE INFO" btncolor="btn btn-primary"/>
                    <ViewBtn link={"https://unsplash.com/s/photos/" + city.city} use="MORE PICS" btncolor="btn btn-secondary"/>
                    <br/>
                  <DeleteBtn onClick={() => deleteCity(city._id)} />
                  </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>You havent been anywhere!</h3>
            )}
        </div>
    )
}

export default Saved