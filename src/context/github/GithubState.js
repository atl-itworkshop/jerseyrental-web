import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SET_LOADING, GET_CONTRIBUTORS, GET_CONTRIBUTOR } from "../types";

const GithubState = props => {
   const initialState = {
      contributors: [],
      contributor: {},
      loading: false
   };

   const [state, dispatch] = useReducer(GithubReducer, initialState);

   // Search Users
   const getContributors = async () => {
      setLoading();

      const res = await axios.get(
         `https://api.github.com/repos/atl-itworkshop/docs/contributors`
      );

      dispatch({
         type: GET_CONTRIBUTORS,
         payload: res.data
      });
   };

   // Get User
   const getContributor = async username => {
      setLoading();

      const res = await axios.get(`https://api.github.com/users/${username}`);

      dispatch({
         type: GET_CONTRIBUTOR,
         payload: res.data
      });
   };

   // Set Loading
   const setLoading = () => dispatch({ type: SET_LOADING });

   return (
      <GithubContext.Provider
         value={{
            contributors: state.contributors,
            contributor: state.contributor,
            loading: state.loading,
            getContributors,
            getContributor
         }}
      >
         {props.children}
      </GithubContext.Provider>
   );
};

export default GithubState;