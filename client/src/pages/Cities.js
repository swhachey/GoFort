import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { List, ListItem} from "../components/List/list"
import {Input, TextArea, FormBtn} from "../components/SearchForm/searchform"
import API from "../utils/API"

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

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

   function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.city && formObject.country) {
      API.saveCity({
        city: formObject.city,
        country: formObject.country,
        synopsis: false
      })
        .then(res => loadCities())
        .catch(err => console.log(err));
    }
  };

    return (
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
                placeholder="What Country?"
              />
              <FormBtn disabled={!(formObject.city && formObject.country)}
                onClick={handleFormSubmit}>
                Find City
              </FormBtn>
              <br/>
              <br/>
            </form>
          
        {cities.length ? (
              <List>
                  <ListItem>
                      <h3>API working</h3>
                  </ListItem>
              </List>
            ) : (
              <h3>No Results to Display...</h3>
            )}
              <br/>
          </div>
    )
}

export default Cities
