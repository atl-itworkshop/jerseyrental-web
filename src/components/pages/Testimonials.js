import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import FakeapiContext from "../../context/fakeapi/fakeapiContext";

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
         <div style={userStyle}>
            {posts.map(post => (
               <div className="card" key={post.title}>
                  <div>
                     <h3 style={{textAlign:"left"}}>{post.title}</h3>
                     <p style={{textAlign:"left"}}>{post.body}</p>
                  </div>
               </div>
            ))}
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
