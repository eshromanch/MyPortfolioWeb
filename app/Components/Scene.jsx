// import React, { useRef, useState } from 'react';
// import { useSpring, animated } from '@react-spring/three';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { Suspense } from 'react';
// import StarsModel from './Stars';
// import Room from './Room';

// function Scene() {
// const cameraRef = useRef()
// // const [springProps, setSpringProps] = useState()
// //  const springProps = useSpring({
// //     position: [0, 0, 5],
// //     config: { mass: 1, tension: 280, friction: 60 },
// //   })
//   const [clicked, setClicked] = useState(false)

// // const CameraPos = ()=>{
// //     useFrame(()=>{
// //         const springProps = useSpring({
// //             position: clicked ? [0, 0, 5] : [0, 0, 45],
// //             config: { mass: 1, tension: 280, friction: 60 },
// //           })
// // return   <PerspectiveCamera ref={cameraRef} makeDefault position={springProps.position} />
// //     })
// // }
//         const springProps = useSpring({
//             position: clicked ? [0, 0, 5] : [0, 0, 45],
//             config: { mass: 1, tension: 280, friction: 60 },
//           })
//   const handleClick = () => setClicked(s => !s)
//   return (
//     <> 
//     <Canvas className="h-2xl w-2xl bg-[#12071f]">
//       <OrbitControls
//         enableZoom={true}
//         enableRotate={true}
//         enablePan={true}
//         minDistance={1}
//         maxDistance={100}
//         target={[0, 0, 0]}
//         // initialPosition={[0, 0, 45]}
//         initialPosition={springProps.position}
//       />

// {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 45]} /> */}
//       {/* <animated.perspectiveCamera position={springProps.position} /> */}
//       {/* <CameraPos/> */}
//       <Suspense fallback={null}>
//         <StarsModel />
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <Room />
//       </Suspense>
    
//     </Canvas>
//     <button className="btn absolute z-10 top-[65vh]" onClick={handleClick}>
//     Let's explore
//   </button></>
//   );
// }

// export default Scene;


import React, { useRef, useState } from 'react';
import { OrbitControls, PerspectiveCamera,SoftShadows } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import StarsModel from './Stars';
import Room from './Room';
// import { PerspectiveCamera } from "three";


// SoftShadows()
function Scene({cameraPosition}) {   

  return (
    <>
    <Canvas className="h-2xl w-2xl bg-[#12071f]">
        <SoftShadows/>
          <OrbitControls
        enableZoom={true}
        enableRotate={true}
        enablePan={true}
        minDistance={1}
        maxDistance={100}
        target={[0, 0, 0]}
        initialPosition={[0, 0, 45]}
      />

      <PerspectiveCamera makeDefault position={cameraPosition} name="mainCamera" />
      <Suspense fallback={null}>
        <StarsModel />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Room />
      </Suspense>
     
    </Canvas>

    </>
  );
}

export default Scene;


