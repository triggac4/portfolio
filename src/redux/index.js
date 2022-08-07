import { combineReducers } from "redux";
import imageUrl from "./reducer/imageUrl";
import writeUp from "./reducer/writeUp";

let allReducers= combineReducers({ writeUp,imageUrl});

export default allReducers;