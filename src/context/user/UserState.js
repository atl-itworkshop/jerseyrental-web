import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { GET_COUNTRIES, GET_USER, SET_LOADING } from "../types";

const UserState = props => {
   const initialState = {
      countries: [],
      user: {},
      loading: false
   };

   const [state, dispatch] = useReducer(UserReducer, initialState);

   // Get countries - ONLY FOR TESTING
   const getCountries = async () => {
      setLoading();
        const res = await axios.get(
         `/api/users`
      );
       dispatch({
         type: GET_COUNTRIES,
         payload: res.data
      });
   
  };

    // Get User
    const getUser = async () => {
        setLoading();
          const res = await axios.get(
           `/api/users`
        );
         dispatch({
           type: GET_USER,
           payload: res.data
        });
     
    };

   // Set Loading
   const setLoading = () => dispatch({ type: SET_LOADING });
   
   return (
      <UserContext.Provider
         value={{
            getCountries,
            getUser,
            countries: state.countries,
            user: state.user,
            loading: state.loading
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};

export default UserState;
