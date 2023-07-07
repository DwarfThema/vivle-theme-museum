"use client";

import { useGLTF } from "@react-three/drei";
import SerimScene0 from "./serimScene0";

export default function SerimIndex() {
  return (
    <>
      <SerimScene0 />
    </>
  );
}

useGLTF.preload("/glb/serim/Serim_Scene_2_Ground.gltf");
