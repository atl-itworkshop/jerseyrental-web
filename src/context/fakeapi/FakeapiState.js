import React, { useReducer } from "react";
import axios from "axios";
import FakeapiContext from "./fakeapiContext";
import FakeapiReducer from "./fakeapiReducer";
import { GET_POSTS, SET_LOADING, GET_EVENTS } from "../types";

const FakeapiState = props => {
   const initialState = {
      posts: [],
      events: [],
      loading: false
   };

   const [state, dispatch] = useReducer(FakeapiReducer, initialState);

    // Get Users
    const getEvents = async () => {
        setLoading();
          const res = await axios.get(
           `http://jsonplaceholder.typicode.com/users?_limit=5`
        );
         dispatch({
           type: GET_EVENTS,
           payload: res.data
        });
     
    };

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
            events: state.events,
            loading: state.loading,
            getEvents,
            posts: state.posts,
            getPosts
          
         }}
      >
         {props.children}
      </FakeapiContext.Provider>
   );
};

export default FakeapiState;
