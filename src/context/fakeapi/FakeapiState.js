import React, { useReducer } from "react";
import axios from "axios";
import FakeapiContext from "./fakeapiContext";
import FakeapiReducer from "./fakeapiReducer";
import { GET_POSTS, SET_LOADING } from "../types";

const FakeapiState = props => {
   const initialState = {
      posts: [],
      loading: false
   };

   const [state, dispatch] = useReducer(FakeapiReducer, initialState);

   // Get Posts
   const getPosts = async () => {
      setLoading();

      const res = await axios.get(
         `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );

      dispatch({
         type: GET_POSTS,
         payload: res.data
      });
   };

   // Set Loading
   const setLoading = () => dispatch({ type: SET_LOADING });

   return (
      <FakeapiContext.Provider
         value={{
            posts: state.posts,
            loading: state.loading,
            getPosts
         }}
      >
         {props.children}
      </FakeapiContext.Provider>
   );
};

export default FakeapiState;
