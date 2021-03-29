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

    return (
        <div className="container searchform">
            <br/>
         <form>
              <Input
                onChange={handleInputChange}
                name="city"
                placeholder="What city you wanna go to?"
              />
              <Input
                onChange={handleInputChange}
                name="country"
                placeholder="What country you wanna go to?"
              />
              <FormBtn>
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
