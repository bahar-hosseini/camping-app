import React from "react";
// import classNames from "classnames";
// import "components/Button.scss";

export default function Button(props) {

  //possible props: title, color
  return (
    <button
      // className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
