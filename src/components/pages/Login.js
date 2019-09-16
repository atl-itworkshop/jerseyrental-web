import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import AuthContext from "../../context/auth/authContext";

import { Row, Col } from "react-bootstrap";

const Login = () => {
   const authContext = useContext(AuthContext);

   const { loading, getUser, user } = authContext;

   if (loading) {
      return <Spinner />;
   } else {
      return <Fragment></Fragment>;
   }
};

export default Login;
