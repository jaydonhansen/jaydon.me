import React from "react";
import numel from "./numel.gif";
import "./App.css";
import Spotify from "react-spotify-embed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={numel} className="Numel" alt="hello there" />
        <Spotify
          wide
          link="https://open.spotify.com/track/2qUWAMtLCCfcnIaqANz1lR?si=d4e6fb362c2e4fa1"
          width="50%"
        />
      </header>
    </div>
  );
}

export default App;
