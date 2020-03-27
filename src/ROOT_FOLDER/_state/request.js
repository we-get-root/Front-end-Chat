import axios from 'axios';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// ===>
// The initialization store is Packed into a single object;
const initialStateForReducer = {
  _pageState: {
    users: [],        // @type/array
    messages: [],     // @type/array
    online: false,    // @type/boolean
    loading: false,   // @type/boolean
  },
  _authState: {
    statusAuth: false,  // @type/boolean
    message: '',        // @type/string
    codeError: 0,       // @type/number
    loading: false,     // @type/boolean
  },
}


const pageState = (state = initialStateForReducer._pageState, action) => {
  switch (action.type) {
    case 'USERS::USER_ITEM': {
      return { ...state, users: [...action.users] }
    }
    case 'DIALOG::USER_DIALOG': {
      return { ...state, messages: [...action.dialog] }
    }
    case 'LOADING::SET_BOOL': {
      return { ...state, loading: action.loading }
    }
    case 'ONLINE::USER_ONLINE': {
      return { ...state, online: action.online }
    }
    default: {
      return state;
    }
  }
}

const authState = (state = initialStateForReducer._authState, action) => {
  switch (action.type) {
    case 'AUTH::STATUS_ERROR': {
      return { ...state, statusAuth: false, message: action.message, codeError: action.code }
    }
    case 'AUTH::SUCCESS': {
      return { ...state, statusAuth: true, message: '', codeError: 0, token: action.token }
    }
    case 'AUTH::LOADING': {
      return { ...state, loading: action.loading }
    }
    default: {
      return state;
    }
  }
}
// <===


// ===>
// Setting createStor.
const rootReducers = combineReducers({
  pageState,
  authState,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)))
export default store;
// <===


// ===>
// Collecting the url for a request to the server.
// Receive $url, $room, $userId, $authUserId and check whether the user's room is passed, 
// then return the truth, otherwise false.
const instanceCreate = (url) => {

  return axios.create({
    baseURL: 'http://localhost:9000',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// <===


// ===> 
// Here everything action create 
const ac_SET_USER_ITEM = (users) => ({ type: 'USERS::USER_ITEM', users: users })
const ac_SET_USERS_DIALOG = (dialog) => ({ type: 'DIALOG::USER_DIALOG', dialog: dialog })
const ac_SET_LOADING = (bool) => ({ type: 'LOADING::SET_BOOL', loading: bool })

const ac_SET_AUTH_STATUS_ERROR = (code, mess) => ({ type: 'AUTH::STATUS_ERROR', code: code, message: mess })
const ac_SET_AUTH_SUCCESS = (bool, tok) => ({ type: 'AUTH::SUCCESS', status: bool, token: tok })
const ac_SET_AUTH_LOADING = (bool) => ({ type: 'AUTH::LOADING', loading: bool })

// <===

// ===>
// Call function thunk in the PageIndex components. 
// Give $patch after call function from component pageIndex 
export const getUsersItem = (patch) => {
  return (dispatch) => {
    const instance = instanceCreate(patch)
    return instance.get().then(({ data }) => dispatch(ac_SET_USER_ITEM(data)))
  }
}

export const getUsersDialog = (patch, room, userId, authUserId) => {
  return (dispatch) => {
    dispatch(ac_SET_LOADING(true))
    const instance = instanceCreate(patch, room, userId, authUserId)
    return instance.get().then(({ data }) => {
      dispatch(ac_SET_USERS_DIALOG(data[0].messagesRoom))
      dispatch(ac_SET_LOADING(false))
    }).catch((e) => {
      console.log(`ERROR:: getUsersDialog__:: ${e}`)
      dispatch(ac_SET_LOADING(false))
    })
  }
}

export const userAuthorization = (userData) => {
  const { dispatch } = store;
  dispatch(ac_SET_AUTH_SUCCESS(true))
  const instance = instanceCreate()
  return instance.post('/authorization', { ...userData }).then(({ data }) => {
    if (!data.success) {
      dispatch(ac_SET_AUTH_SUCCESS(false))
      dispatch(ac_SET_AUTH_STATUS_ERROR(data.error, data.message))
    } else {
      dispatch(ac_SET_AUTH_SUCCESS(false))
      dispatch(ac_SET_AUTH_SUCCESS(true, data.token))
    }
  }).catch((e) => dispatch(ac_SET_AUTH_SUCCESS(false))) // добавить обработкку ошибки 
}


// <===


