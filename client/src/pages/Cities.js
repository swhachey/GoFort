import React, {useState, useEffect} from 'react'
import {Input, TextArea, FormBtn} from "../components/SearchForm/searchform"



function Cities() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

    return (
        <div className="container">
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
            </div>
    )
}

export default Cities
