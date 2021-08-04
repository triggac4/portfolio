import { combineReducers } from "redux";
import imageUrl from "./imageUrl";
import writeUp from "./writeUp";

let allReducers= combineReducers({ writeUp,imageUrl});

export default allReducers;