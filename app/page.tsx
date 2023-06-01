"use client";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Canvas>
        <OrbitControls makeDefault />
        <PerspectiveCamera position={[2, 1, 2]} makeDefault near={0.001} />

        <Environment preset="city" />
        <ambientLight intensity={0.5} />

        <mesh scale={1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </main>
  );
}
