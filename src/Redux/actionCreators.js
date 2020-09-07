import Axios from "axios";
import { 
  GET_LIST_BRAND,
  ADD_TO_BRAND,
  DELETE_FROM_BRAND
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL

////get filter brand
export const listBrand = id => ({
  type: GET_LIST_BRAND,
  brand: id
})
export const addToBrand = id => ({
  type: ADD_TO_BRAND,
 id
 
})

export const deleteFromBrand = id => ({
  type: DELETE_FROM_BRAND,
 id
})