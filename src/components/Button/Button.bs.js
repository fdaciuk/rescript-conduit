// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Theme from "../../lib/Theme.bs.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Css from "@emotion/css";

function button(block) {
  return Css.css({
              background: Theme.Colors.blue,
              border: 0,
              color: Theme.Colors.white,
              minWidth: block ? "100%" : "20rem",
              height: "5.5rem",
              borderRadius: Theme.Radius.small,
              cursor: "pointer",
              fontFamily: Theme.fontFamily,
              fontSize: "2.0rem"
            });
}

function Button(Props) {
  var children = Props.children;
  var classNameOpt = Props.className;
  var blockOpt = Props.block;
  var onClick = Props.onClick;
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var block = blockOpt !== undefined ? blockOpt : false;
  var tmp = {
    className: className + " " + button(block)
  };
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  return React.createElement("button", tmp, children);
}

var make = Button;

export {
  button ,
  make ,
  
}
/* react Not a pure module */
