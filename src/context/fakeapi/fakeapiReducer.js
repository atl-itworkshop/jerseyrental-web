import {
  GET_POSTS,
  GET_EVENTS
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
        loadingforevents: false
      };
    default:
      return state;
  }
};
