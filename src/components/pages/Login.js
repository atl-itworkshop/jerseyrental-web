import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserContext from "../../context/user/userContext";

import { Row, Col } from "react-bootstrap";

const Login = () => {
   const userContext = useContext(UserContext);

   const { loading, user, getUser, getCountries, countries } = userContext;

   useEffect(() => {
      getCountries();
      // eslint-disable-next-line
   }, []);

   if (loading) {
      return <Spinner />;
   } else {
      return (
         <Fragment>
            <Row>



               {countries.map(country => (
                  <Col lg="3" sm="6" className="mb-3">
                     <div
                        className="card border-primary h-100"
                        key={country.Code}
                     >
                        <div className="card-body">
                           <h4 className="card-title text-truncate text-left">
                              {country.Name}
                           </h4>
                           <p className="card-text text-left">{country.Continent}</p>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
         </Fragment>
      );
   }
};

export default Login;
