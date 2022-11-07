// invoked from CourseInput.js comp
import React from "react";

// invoked from CourseInput.js component
import "./Button.css";

const Button = (props) => {
  console.log(props.val);
  return (
    <button type={props.type} className={!props.val ? 'button_' :  'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
