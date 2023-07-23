"use client";

import { Canvas } from "@react-three/fiber";

import Scene from "@/components/SplineExample";
import { OrbitControls, TransformControls } from "@react-three/drei";

const Page = () => {
  return (
    <Canvas>
      <Scene shadows flat linear />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-Math.PI * 0.3}
        maxAzimuthAngle={Math.PI * 0.1}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.45}
      />
    </Canvas>
  );
};

export default Page;
