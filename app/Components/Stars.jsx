import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

const StarsModel = () => {
    const refMesh = useRef();
  
    useFrame(() => {
      if(refMesh.current) {
        // rotating the object
        refMesh.current.rotation.x += 0.001;
        refMesh.current.rotation.y += 0.002;
      }
    });
    return (<mesh ref={refMesh} > <Stars /></mesh>);
  }

  export default StarsModel;