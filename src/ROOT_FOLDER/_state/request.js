import axios from 'axios';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';


import { layoutDB } from './dblayout';
// ===>
// The initialization store is Packed into a single object;
const initialStateForReducer = {
  _pageState: {
    my: {},
    users: [],        // @type/array
    posts: [],
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
    case 'PAGE::SET__MY': {
      return { ...state, my: { ...action.my} }
    }
    case 'PAGE::SET__USER_ITEM': {
      return { ...state, users: [...action.users] }
    }
    case 'PAGE::SET__USER_DIALOG': {
      return { ...state, messages: [...action.dialog] }
    }
    case 'PAGE::SET__LOADING': {
      return { ...state, loading: action.loading }
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
      return { ...state, statusAuth: action.status, message: '', codeError: 0 }
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
const middleware = [thunk];
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)));
export default store;
// <===


// ===>
// Collecting the url for a request to the server.
// Receive $url, $room, $userId, $authUserId and check whether the user's room is passed, 
// then return the truth, otherwise false.
const instanceCreate = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'http://localhost:9000',
    responseType: 'json',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'authorization': `${token}`
    }
  })
}

// <===


// ===> 
// Here everything action create 
const ac_SET_PAGE_MY = (data) => ({ type: 'PAGE::SET__MY', my: data })
const ac_SET_PAGE_USER_ITEM = (users) => ({ type: 'PAGE::SET__USER_ITEM', users: users });
const ac_SET_PAGE_USERS_DIALOG = (dialog) => ({ type: 'PAGE::SET__USER_DIALOG', dialog: dialog });
const ac_SET_PAGE_LOADING = (bool) => ({ type: 'PAGE::SET__LOADING', loading: bool });

const ac_SET_AUTH_STATUS_ERROR = (code, mess) => ({ type: 'AUTH::STATUS_ERROR', code: code, message: mess });
const ac_SET_AUTH_SUCCESS = (bool) => ({ type: 'AUTH::SUCCESS', status: bool });
const ac_SET_AUTH_LOADING = (bool) => ({ type: 'AUTH::LOADING', loading: bool });

// <===

// ===>
// Call function thunk in the PageIndex components. 
// Give $patch after call function from component pageIndex 
export const userAuthorization = (userData) => {
  return (dispatch) => {
    dispatch(ac_SET_AUTH_LOADING(true));
    const instance = instanceCreate();
    return instance.post('/authorization', { ...userData }).then(({ data }) => {
      console.log(data)
      if (!data.success) {
        dispatch(ac_SET_AUTH_SUCCESS(false));
        dispatch(ac_SET_AUTH_STATUS_ERROR(data.error, data.message));
      } else {
        localStorage.setItem('token', data.token);
        dispatch(ac_SET_AUTH_SUCCESS(true, data.token));
      }
    }).catch((error) => {
      dispatch(ac_SET_AUTH_SUCCESS(false));
      dispatch(ac_SET_AUTH_LOADING(false));
      console.error(`Error in:: userAuthorization: typeError ${error}`);
    })
  }
}

export const getMy = () => {
  return (dispatch) => {
    dispatch(ac_SET_PAGE_MY(layoutDB))
  }
}

export const getUsersItem = (patch) => {
  return (dispatch) => {
    // const instance = instanceCreate();
    // return instance.get().then(({ data }) => {
    //   dispatch(ac_SET_USER_ITEM(data));
    // }).catch((error) => {
    //   console.error(`Error in: getUsersItem: type Error ${error}`);
    // })
  }
}

export const getUsersDialog = (patch, room, userId, authUserId) => {
  return (dispatch) => {
    dispatch(ac_SET_PAGE_LOADING(true));
    const instance = instanceCreate(patch, room, userId, authUserId);
    return instance.get().then(({ data }) => {
      dispatch(ac_SET_PAGE_USERS_DIALOG(data[0].messagesRoom));
      dispatch(ac_SET_PAGE_LOADING(false));
    }).catch((error) => {
      dispatch(ac_SET_PAGE_LOADING(false));
      console.error(`Error in:: getUsersDialog: type Error ${error}`);
    })
  }
}


export const checkTokenAuthUser = (token) => {

  return (dispatch) => {
    if (token) {
      const instance = instanceCreate();

      instance.get('/testGET').then(({ data }) => {
        if (data.success) {
          dispatch(ac_SET_AUTH_SUCCESS(true));
        } else {
          localStorage.removeItem('token');
          dispatch(ac_SET_AUTH_SUCCESS(false));
        }
      }).catch((error) => {
        console.error(error)
      })
    } else {
      dispatch(ac_SET_AUTH_SUCCESS(false));
    }
  }
}


// <===


