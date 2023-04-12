

import { PostAPI } from "./api"
import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./type"

    export const getDataPost=(dispatch,page,query,language,qInTitle)=>{

        dispatch({type:POST_LOADING})
        PostAPI(page,query,language,qInTitle).then((re)=>{
    dispatch({type:POST_SUCCESS,payload:re})
        }).catch((err)=>{
           dispatch({type:POST_ERROR})
        })
    }