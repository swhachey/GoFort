import React from "react";
import "./delete.css";

function Delete(props) {
  return (
   <button className="btn btn-danger" {...props} type="button" tabIndex="1" >
       ✗DELETE
    </button>
  );
}

export default Delete;
