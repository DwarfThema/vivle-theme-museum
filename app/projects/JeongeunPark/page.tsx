"use client";

import { Model } from "@/app/utils/cli/Model";
import { WebGPU } from "@/app/utils/cli/WebGPU";

import { Canvas, extend } from "@react-three/fiber";
import {
  Bounds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  MeshBasicNodeMaterial,
  MeshStandardNodeMaterial,
} from "three/examples/jsm/nodes/Nodes";
import { useRef, useState } from "react";

function Thing() {
  return <Model />;
}
extend({ MeshBasicNodeMaterial, MeshStandardNodeMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshBasicNodeMaterial: any;
      meshStandardNodeMaterial: any;
    }
  }
}

export default function Works() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {/*       <Canvas>
        <OrbitControls makeDefault autoRotate />
        <PerspectiveCamera position={[2, 1, 2]} makeDefault />

        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <Bounds fit clip observe margin={1.3}>
          <Thing />
        </Bounds>
      </Canvas> */}

      {
        <WebGPU>
          <OrbitControls makeDefault />
          <PerspectiveCamera position={[2, 1, 2]} makeDefault near={0.001} />

          <Environment files="/hdr/hansaplatz_2k.hdr" background />
          <ambientLight intensity={0.5} />

          <Bounds fit clip margin={3}>
            <Thing />
          </Bounds>
        </WebGPU>
      }
    </main>
  );
}
