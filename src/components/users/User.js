import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/userContext";

const User = () => {
   const userContext = useContext(UserContext);

   const { loading, user, getUser } = userContext;

   useEffect(() => {
      getUser();
      // eslint-disable-next-line
   }, []);

   if (loading) {
      return <Spinner />;
   } else {
      return (
         <Fragment>
            <h1>{user.msg}</h1>
         </Fragment>
      );
   }
};

export default User;
