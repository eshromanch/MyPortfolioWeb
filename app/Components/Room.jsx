import React, { useEffect,useState } from 'react'
import * as THREE from 'three';
import {  useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useCubeTexture, useTexture } from '@react-three/drei';


function Room() {

  const envMap = useCubeTexture(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'], { path: '/indoors-skyboxes/indoors-skyboxes/DallasW/' })
  const refMesh = useRef();
  
  useFrame(() => {
    if(refMesh.current) {
      // rotating the object
      refMesh.current.rotation.x += 0.001;
      refMesh.current.rotation.y += 0.002;
    }
  });
  return (
    <mesh ref={refMesh} >


<sphereGeometry args={[5, 64, 64]} />
      <meshBasicMaterial envMap={envMap} metalness={0.9} roughness={0.1} side={THREE.BackSide} attach="material" />

    </mesh>
  )
}

export default Room