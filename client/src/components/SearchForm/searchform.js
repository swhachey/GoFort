import React from 'react'
import "./searchform.css"

export function Input(props) {
    return (
        <div className="form-group input">
      <input className="form-control" {...props} />
    </div>
    );
};

export function TextArea(props) {
    return(
   <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
    )
};


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-dark">
      {props.children}
    </button>
  );
}
