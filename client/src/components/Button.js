import React from "react";
import "./styles/Button.scss";
// import classNames from "classnames";
// import "components/Button.scss";

export default function Button(props) {
  console.log(props);
  //possible props: title, color
  return (
    <button
      className={props.className ? props.className : "btn"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <h4>{props.children}</h4>
    </button>
  );
}
// <div class="spin"/>