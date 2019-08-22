import React, { useReducer } from "react";
import MainAppContext from "./mainAppContext";
import MainAppReducer from "./mainAppReducer";
import { GET_TAGLINE } from "../types";

const MainAppState = props => {
   const initialState = {
      tagline: "Sports Fans Unite !! Never go to a sporting event without your favorite jersey..."
   };

   const [state, dispatch] = useReducer(MainAppReducer, initialState);

   // Set Logo
   const getTagline = () => dispatch({ type: GET_TAGLINE, 
    payload: "Sports Fans Unite !! Never go to a sporting event without your favorite jersey..." });

   return (
      <MainAppContext.Provider
         value={{
            tagline: state.tagline,
            getTagline
         }}
      >
         {props.children}
      </MainAppContext.Provider>
   );
};

export default MainAppState;
