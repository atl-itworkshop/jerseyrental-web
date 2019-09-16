import React, { Fragment, useContext, useEffect } from "react";
import MainPage from "../mainpage/MainPage";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
   const authContext = useContext(AuthContext);

   useEffect(() => {
      authContext.loadUser();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Fragment>
         <MainPage />
      </Fragment>
   );
};

export default Home;
