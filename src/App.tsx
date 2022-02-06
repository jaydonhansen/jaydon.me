import React from "react";
import Spotify from "react-spotify-embed";

function App() {
  const numel = "/img/numel.gif";
  return (
    <div className="text-center	">
      <div className="grid place-items-center h-screen bg-main-background">
        <div className="grid place-items-center max-w-xl">
          <img src={numel} className= "p-8" alt="hello there" />
          <Spotify
            wide
            link="https://open.spotify.com/track/2qUWAMtLCCfcnIaqANz1lR?si=d4e6fb362c2e4fa1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
