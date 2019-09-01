import React, { useContext, useEffect } from "react";
import ContributorItem from "./ContributorItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

import { Row, Col } from "react-bootstrap";

const Contributors = () => {
   const githubContext = useContext(GithubContext);

   const { loading, contributors, getContributors } = githubContext;

   useEffect(() => {
      getContributors();
      // eslint-disable-next-line
   }, []);

   if (loading) {
      return <Spinner />;
   } else {
      return (
         <div>
            <Row>
               {contributors.map(contributor => (
                  <Col lg="4" sm="6">
                     <ContributorItem
                        key={contributor.id}
                        contributor={contributor}
                     />
                  </Col>
               ))}
            </Row>
         </div>
      );
   }
};

export default Contributors;
