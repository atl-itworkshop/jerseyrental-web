import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./jersey.png")} width="25%" alt="logo" />
        <p>
          Sports Fans Unite !!  Never go to a sporting event without your favorite jersey !!
               </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how Jersey Rental works
        </a>
      </header>
    </div>
  );
}

export default App;
