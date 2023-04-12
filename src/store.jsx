

import thunk from 'redux-thunk'
import {legacy_createStore,combineReducers, applyMiddleware, compose}from 'redux'
import { postReducer } from './redux/reducer'
const rootReducer=combineReducers({
    newsdata:postReducer,
})

export const store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))