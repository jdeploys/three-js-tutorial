"use client";

import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { Stars } from "@/components/Stars";
import SplineExample from "@/components/SplineExample";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// https://discoverthreejs.com/book/introduction/get-threejs/

function Box(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh | null>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Page = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" intensity={8} position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
};

export default Page;
