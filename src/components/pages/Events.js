<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import FakeapiContext from "../../context/fakeapi/fakeapiContext";

const Events = () => {
   const fakeapiContext = useContext(FakeapiContext);
   const { loadingforevents, events, getEvents } = fakeapiContext;
   useEffect(() => {
    getEvents();     // eslint-disable-next-line
   },[]);

   if (loadingforevents) {
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

=======
import React, {Component} from 'react';
import Contacts from './contacts';



class Events extends Component {
  render() {
      return (
          <Contacts contacts={this.state.contacts} />
      )
  }

  state = {
      contacts: []
  };

  componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then((data) => {
              this.setState({ contacts: data })
          })
          .catch(console.log)
  }

  
}
>>>>>>> 70d4fa7178d6d3111a1e9360901fd84195443a1f
export default Events;
