import axios from 'axios';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';



const USER_ITEM = 'USER_ITEM';
const _state = {
  itemUser: [],
}

const setUserReducer = (state = _state, action) => {
  switch (action.type) {
    case USER_ITEM: {
      return { ...state, itemUser: [...action.userItem] }
    }
    default: {
      return state;
    }
  }
}

const rootReducers = combineReducers({ 
  setUserReducer 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
export default createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)))


const instance = axios.create({
  baseURL: 'http://localhost:9000/posts',
})


const actionUserItem = (data) => ({ type: USER_ITEM, userItem: data, })

export const thunkAddUserItem = () => {
  return (dispatch) => {
    return instance.get().then((response) => dispatch(actionUserItem(response.data)))
  }
}








// export default addUserItem;


