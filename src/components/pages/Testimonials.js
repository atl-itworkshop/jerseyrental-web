import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import FakeapiContext from "../../context/fakeapi/fakeapiContext";

import { Row, Col } from "react-bootstrap";

const Testimonials = () => {
   const fakeapiContext = useContext(FakeapiContext);

   const { loading, posts, getPosts } = fakeapiContext;

   useEffect(() => {
      getPosts();
      // eslint-disable-next-line
   }, []);

   if (loading) {
      return <Spinner />;
   } else {
      return (
         <div>
            <Row>
            {posts.map(post => (
               <Col lg="3" sm="6" className="mb-3">
               <div className="card border-primary h-100" key={post.title}>
                  <div className="card-body">
                     <h4 className="card-title text-truncate text-left">{post.title}</h4>
                     <p className="card-text text-left">{post.body}</p>
                  </div>
               </div>
               </Col>
            ))}
            </Row>
         </div>
      );
   }
};

const userStyle = {
   display: "grid",
   gridTemplateColumns: "repeat(3, 1fr)",
   gridGap: "1rem"
};

export default Testimonials;
