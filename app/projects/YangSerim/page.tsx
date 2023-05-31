"use client";

import { FPSControls } from "@/app/utils/cli/FPSControls";
import { Model } from "@/app/utils/cli/Model";
import { WebGPU } from "@/app/utils/cli/WebGPU";
import { Physics } from "@react-three/cannon";

import {
  Bounds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";

useGLTF.preload("/glb/serim/Serim_Scene_2_Ground.gltf");

export default function Works() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <WebGPU>
        <Physics>
          <FPSControls />

          <Environment preset="night" />
          <ambientLight intensity={0.5} />

          <Model
            meshDir="/glb/serim/Serim_Scene_2_Ground.gltf"
            meshName="Ground_Mesh"
            mtlName="Ground"
          />
          <Model
            meshDir="/glb/serim/Serim_Scene_2_House.gltf"
            meshName="House_Mesh"
            mtlName="House_Mtl"
          />
          <Model
            meshDir="/glb/serim/Serim_Scene_2_Star.gltf"
            meshName="Star_Mesh"
            mtlName="Star_mtl"
          />
        </Physics>
      </WebGPU>
    </main>
  );
}
