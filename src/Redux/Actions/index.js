import { BUY_LAPTOP, SET_LAPTOP } from "./ActionType"

export const buyLaptop = () =>{
   return {
        type:BUY_LAPTOP
    }
}

export const setLaptop = () =>{
    return {
         type:SET_LAPTOP
     }
 }