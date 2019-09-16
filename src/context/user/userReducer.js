import {
    GET_COUNTRIES,
    GET_USER,
    SET_LOADING
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
          loading: false
        };
      case GET_USER:
        return {
          ...state,
          user: action.payload,
          loading: false
        };

        case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      
      default:
        return state;
    }
  };
  