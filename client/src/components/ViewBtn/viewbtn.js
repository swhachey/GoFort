import React from "react";
import "./viewbtn.css"


function ViewBtn(props) {
  return (
       <a rel="noopener noreferrer" href={props.link} target="_blank">
    <button className={props.btncolor} {...props} type="button" tabIndex="1" >
       {props.use}
    </button>
    </a>
  );
}

export default ViewBtn;