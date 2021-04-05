import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { List, ListItem} from "../components/List/list"
import {Input, FormBtn} from "../components/SearchForm/searchform"
import API from "../utils/API"
import Delete from "../components/DeleteBtn/Delete"
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
        setCities(res.data.filter(city => !city.traveled))
      )
      .catch(err => console.log(err));
  };

function deleteCity(id) {
    API.deleteCity(id)
      .then(res => loadCities())
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
       .then(res => alert("Go For It!"))
      .then(res => loadCities())
      .catch(err => console.log(err))
    }
  };

  function handleTravel(id) {
    API.travelCity(id)
    .then(res => alert("You Went For It!"))
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
                    <img src={city.info} alt={city.city}/>
                    <br/>
                    <Link to={"/cities/" + city._id}>
                      <strong>
                        {city.city},  {city.country}
                        {city.visited}
                      </strong>
                    </Link>
                  
                    <div>
                    <ViewBtn link={"https://en.wikipedia.org/wiki/" + city.city} use="MORE INFO" btncolor="btn btn-primary"/>
                    <ViewBtn link={"https://unsplash.com/s/photos/" + city.city} use="MORE PICS" btncolor="btn btn-secondary"/>
                
                    <TraveledBtn onClick={()=>handleTravel(city._id)}/>
                  
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
