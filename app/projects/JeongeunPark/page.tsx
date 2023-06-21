"use client";

import { Model } from "@/app/utils/cli/Model";
import { WebGPU } from "@/app/utils/cli/WebGPU";

import {
  Bounds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";

export default function JeongeunIndex() {
  return (
    <main style={{ height: "100vh", width: "100%" }} className="bg-black">
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
            <Model
              meshDir="/glb/jeoungeun/JEOUNGEUN_join.gltf"
              meshName="Group"
              mtlName="Sculpture"
            />
          </Bounds>
        </WebGPU>
      }
    </main>
  );
}
