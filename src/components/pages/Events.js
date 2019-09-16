
import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import FakeapiContext from "../../context/fakeapi/fakeapiContext";

const Events = () => {
   const fakeapiContext = useContext(FakeapiContext);
   const { loading, events, getEvents } = fakeapiContext;
   useEffect(() => {
    getEvents();     // eslint-disable-next-line
   },[]);

   if (loading) {
    return <Spinner />;
 } else {
        return (
      <div style={userStyle}>
        <div>
            {events.map(post => (
              <div className="card" key={post.id}>
                <div>
                    <h3 style={{textAlign:"left"}}>{post.name}</h3>
                    <p style={{textAlign:"left"}}>{post.id}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      );
    }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Events;
