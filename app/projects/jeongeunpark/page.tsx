"use client";

import { Ground } from "@/app/utils/cli/Ground";
import { Model } from "@/app/utils/cli/Model";
import { Player } from "@/app/utils/cli/Player";
import { WebGPU } from "@/app/utils/cli/WebGPU";

import { Environment, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Leva, useControls } from "leva";

export default function JeongeunIndex() {
  const { objX, objY, objZ } = useControls({
    objX: 0.5,
    objY: 2,
    objZ: 0,
  });

  return (
    <main style={{ height: "100vh", width: "100%" }} className="bg-black">
      {
        <>
          <Leva collapsed />
          <KeyboardControls
            map={[
              { name: "forward", keys: ["ArrowUp", "w", "W"] },
              { name: "backward", keys: ["ArrowDown", "s", "S"] },
              { name: "left", keys: ["ArrowLeft", "a", "A"] },
              { name: "right", keys: ["ArrowRight", "d", "D"] },
              { name: "jump", keys: ["Space"] },
              { name: "sit", keys: ["v"] },
            ]}
          >
            <WebGPU>
              <Environment files="/hdr/hansaplatz_2k.hdr" background />
              <ambientLight intensity={0.5} />
              <Physics gravity={[0, -25, 0]}>
                <Ground>
                  <Model
                    meshDir="/glb/jeoungeun/church/collider.gltf"
                    meshName="collider"
                    mtlName="collider_mtl"
                  />
                </Ground>
                <Player pos={{ x: 0, y: 0.6, z: 0 }} />
                <Model
                  meshDir="/glb/jeoungeun/church/church_1.gltf"
                  meshName="church_1"
                  mtlName="church_1_mtl"
                />
                <Model
                  meshDir="/glb/jeoungeun/church/church_2.gltf"
                  meshName="church_2"
                  mtlName="church_2_mtl"
                />
                <Model
                  meshDir="/glb/jeoungeun/JEOUNGEUN_join.gltf"
                  meshName="Group"
                  mtlName="Sculpture"
                  pos={{ x: 0, y: 0, z: -2 }}
                  scale={{ x: 3, y: 3, z: 3 }}
                />
              </Physics>
            </WebGPU>
          </KeyboardControls>
        </>
      }
    </main>
  );
}
