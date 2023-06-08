"use client";

import { Ground } from "@/app/utils/cli/Ground";
import { Model } from "@/app/utils/cli/Model";
import { Player } from "@/app/utils/cli/Player";
import { WebGPU } from "@/app/utils/cli/WebGPU";
import { Physics } from "@react-three/rapier";

import {
  Bounds,
  Environment,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  useGLTF,
} from "@react-three/drei";

export default function Works() {
  return (
    <main className="w-screen h-screen bg-black">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <WebGPU>
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Ground>
              <Model
                meshDir="/glb/serim/Serim_Scene_2_Ground.gltf"
                meshName="Ground_Mesh"
                mtlName="Ground"
              />
            </Ground>
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
          <PointerLockControls />
        </WebGPU>
      </KeyboardControls>
    </main>
  );
}

useGLTF.preload("/glb/serim/Serim_Scene_2_Ground.gltf");
