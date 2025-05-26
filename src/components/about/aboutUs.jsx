"use client";
import React from 'react'
import AboutContent from './aboutContent'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CreditCard } from './CardModels/CreditCard';
import { CreditCard2 } from './CardModels/CreditCard2';
import { SecondSecen } from './CardModels/SecondSecne';
import { ThirdSecen } from './CardModels/ThirdSecen';
import { useSelector } from 'react-redux';
import { Globe } from './CardModels/NeonGlobe';

export const ModelCanvas = () => {

  const scrollY = useSelector((state) => state.scroll.scrollY); 

  return (
    <Canvas shadows>
      <Environment files="/hdris/studio_small.hdr" />
      <PerspectiveCamera makeDefault position={[-25, 20, 1]} fov={50} />
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      {scrollY >= 0 && scrollY < 0.19 && (
        <>
          <CreditCard />
          <CreditCard2 />
        </>
      )}
      {scrollY >= 0.20 && scrollY < 0.39 && <SecondSecen />}
      {scrollY >= 0.39 && scrollY <= 0.75 && <ThirdSecen />}
      {scrollY >= 0.80 && scrollY <= 2 && <Globe />}
    </Canvas>
  );
};

const AboutUs = () => {
  return (
    <div className='w-full h-[300vh]'>
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black" >
        <ModelCanvas />
      </div>
      <AboutContent/>
    </div>
  )
}

export default AboutUs;