import { GET_TAGLINE } from "../types";

export default (state, action) => {
   switch (action.type) {
      case GET_TAGLINE:
         return {
            ...state,
            tagline: action.payload
         };

      default:
         return state;
   }
};
