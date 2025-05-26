"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./model";
import Header from "../../components/header";
import HeroContent from "./heroContent";

export const ModelCanvas = () => {
  return (
    <Canvas shadows>
      <Environment files="/hdris/studio_small.hdr" />
      <PerspectiveCamera makeDefault position={[-29, 17.5, 5]} fov={50} />
      <ambientLight intensity={0.2} />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      <Model />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <ModelCanvas />
      </div>
      <Header />
      <HeroContent />
    </div>
  );
};

export default Hero;
