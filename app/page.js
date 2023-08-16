"use client"
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import StarsModel from './Components/Stars';
import TypingAnimation from './Components/TextComp';




const Home = () => {

  
  return (
    <div id="canvas-container" className="relative flex justify-center items-center h-screen">
      <TypingAnimation />
      <Canvas className="h-2xl w-2xl bg-[#12071f]" camera={{ position: [0, 0, 1] }}>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          minDistance={1}
          maxDistance={100}
          target={[0, 0, 0]}
          initialPosition={[0, 0, 5]}
        />
        
        <Suspense fallback={null}>
        <StarsModel/>

        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;