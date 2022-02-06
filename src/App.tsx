import React from "react";
import ReactPlayer from "react-player/youtube";


function App() {
  const numel = "/img/numel.gif";
  return (
    <div className="text-center	">
      <div className="grid place-items-center h-screen bg-main-background">
        <div className="grid place-items-center max-w-xl">
          <img src={numel} className= "p-32" alt="hello there" />
          <ReactPlayer url="https://www.youtube.com/watch?v=T0ee9RaUJqE" volume={0.2} controls={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
