import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { List, ListItem} from "../components/List/list"
import {Input, FormBtn} from "../components/SearchForm/searchform"
import API from "../utils/API"
import Delete from "../components/DeleteBtn/Delete"
import LoginButton from '../components/LoginButton/login-button'
import LogoutButton from '../components/LogOutButton/logout-button'
import ViewBtn from "../components/ViewBtn/viewbtn"
import TraveledBtn from "../components/TraveledBtn/traveled"

function Cities() {
    const [cities, setCities] = useState([])
    const [formObject, setFormObject] = useState({})

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

  function handleSaveCity(cityData) {
    console.log(cityData)
    API.saveCity(cityData)
      .then(res => alert("You Went For It!"))
      .catch(err => console.log(err));
  };

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

   function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.city && formObject.country) {
      API.searchCity(formObject.city)
      .then(res => {
        const imageURL = res.data.results[0].urls.thumb
       API.saveCity({
        city: formObject.city,
        country: formObject.country,
        info: imageURL
      })
      })
      .then(res => loadCities())
      .catch(err => console.log(err))
    }
  };

  function handleTravel(cityData) {
    API.travelCity(cityData)
     .then(res => loadCities())
      .catch(err => console.log(err));
  }


    return (
      <>

        <div className="container searchform">
            <br/>
         <form>
              <Input
                onChange={handleInputChange}
                name="city"
                placeholder="What City? (required)"
              />
              <Input
                onChange={handleInputChange}
                name="country"
                placeholder="What Country? (required)"
              />
  
              <FormBtn disabled={!(formObject.city)}
                onClick={handleFormSubmit}>
                Add City
              </FormBtn>
              <br/>
              <br/>
            </form>
           <h3>List of Places to Go</h3>
        {cities.length ? (
              <List>
                {cities.map(city => (
                  <ListItem key={city._id}>
                    <img src={city.info}/>
                    <br/>
                    <Link to={"/cities/" + city._id}>
                      <strong>
                        {city.city},  {city.country}
                        {city.visited}
                      </strong>
                    </Link>
                  
                    <div>
                    <ViewBtn link={"https://en.wikipedia.org/wiki/" + city.city}/>
                
                    <TraveledBtn onClick={()=>handleTravel({
                      city: city.city,
                      country: city.country,
                      info: city.info,
                      visited: true
                    })}/>
                  
                  <Delete onClick={() => deleteCity(city._id)} />
                  </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display...</h3>
            )}
              <br/>
          </div>
          </>
    )
}

export default Cities
