import { 
    GET_LIST_BRAND,
    ADD_TO_BRAND,
    DELETE_FROM_BRAND
  } from "./actions";  

   //// GET list brand 

const initialStore7 ={
   brand: []
   
   }
   export const brandReducer = (state = initialStore7, { type, id }) => {   
   
      if(type === ADD_TO_BRAND){
  
         if(state.brand.find(a => a === id)) return state
       
         return {
             ...state,
             brand: state.brand.concat(id)
         }
       }
       
       if(type === DELETE_FROM_BRAND){
         return {
             ...state,
             //year: state.year.filter(c => c !== id),
             brand: state.brand.filter(c => c == id)
         }
       } 
   if (type === GET_LIST_BRAND) { 
     return {
         ...state,
         brand: state.brand
     }
   
   }
   
   return state
   
   } 