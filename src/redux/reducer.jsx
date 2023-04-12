
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./type"
const initalState={
    loading:false,
    error:false,
    data:[]
}
export const postReducer=(state=initalState,
    {type,payload})=>{
   switch(type){
    case POST_LOADING:{
        return{
            ...state,
            loading:true,
          } 
        }
        case POST_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:payload
             } 
            }
        case POST_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,  
              }
            }
    default:{
        return state}}}


