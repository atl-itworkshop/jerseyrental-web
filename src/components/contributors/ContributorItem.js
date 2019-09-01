import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Image, Card } from "react-bootstrap";

const ContributorItem = ({ contributor: { login, avatar_url, html_url } }) => {
   return (
      <React.Fragment>
         <Card className="text-center mb-3">
         <Card.Body>
            <Image src={avatar_url} roundedCircle
               style={{ width: "60px" }} />
            

            <Card.Title>{login}</Card.Title>


            
               <Link
                  to={`/contributor/${login}`}
                  className="btn btn-dark"
               >
                  More
               </Link>
            
            </Card.Body>
         </Card>
      </React.Fragment>
   );
};

ContributorItem.propTypes = {
   contributor: PropTypes.object.isRequired
};

export default ContributorItem;
