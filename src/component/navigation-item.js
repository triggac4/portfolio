import React from "react";
import {
  Link, Route,Switch
} from "react-router-dom";

import Svg from './svg';
let navigationItem=props=>{
    return (
    <div className="navigationItem ">
      <Link className="navigationItem__link" to="/"><Svg className="navigationItem__svg" type="icon-home"/>Home</Link>
      <Switch>
        <Route exact path="/">
          <a href="#about" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-user"/>about</a>
          <a href="#resume" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-file-empty"/>resume</a>
          <a href="#portfolio" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-briefcase"/>portfolio</a>
          <a href="#contact" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-phone"/>contact</a>
        </Route>
      </Switch>
    </div>
);
}

export default navigationItem;