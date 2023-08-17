"use client"
import React, { useState } from 'react';
import TypingAnimation from './Components/TextComp';
import Scene from './Components/Scene';

const Home = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 75]);
  const [cklicked, setcklicked] = useState(false);

  const handleMoveCamera = () => {
    setCameraPosition([0, 0, 5]);
    setcklicked(true); // Set cklicked to true when the button is clicked
  };

  return (
    <div id="canvas-container" className="relative flex justify-center items-center h-screen">
      {cklicked ? null : (
        <button className="bg-blue-500 animate-bounce hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute z-10 top-[65vh]" onClick={handleMoveCamera}>
          Lets explore
        </button>
      )}
      {cklicked ? null : <TypingAnimation />}
      <Scene cameraPosition={cameraPosition} />
    </div>
  );
};

export default Home;
