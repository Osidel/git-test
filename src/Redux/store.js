import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import { 
  brandReducer
} from './reducers'


export default createStore(
  combineReducers({ 
  
  brandReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
