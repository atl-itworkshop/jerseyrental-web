import {
  GET_POSTS,
  GET_EVENTS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
      case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
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
