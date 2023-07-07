import { WebGPU } from "@/app/utils/cli/WebGPU";

import {
  Effects,
  Environment,
  OrbitControls,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import StarsBg from "./src/starBg";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function SerimScene0() {
  const positions = [...Array(300)].map(() => ({
    position: [
      40 - Math.random() * 100,
      40 - Math.random() * 100,
      40 - Math.random() * 100,
    ],
  }));

  return (
    <main className="w-screen h-screen bg-black">
      <WebGPU shadows>
        <Environment preset="night" />
        {/* <ambientLight intensity={0.5} /> */}
        <color attach="background" args={["#202030"]} />
        <fog attach="fog" args={["#202030", 10, 70]} />
        <Sparkles
          count={200}
          scale={[20, 20, 10]}
          size={1.5}
          speed={1}
          color={"#ff9152"}
        />
        <Sparkles
          count={200}
          scale={[20, 20, 10]}
          size={1.5}
          speed={1}
          color={"#fffd8f"}
        />
        {positions.map((props, i) => (
          <StarsBg key={i} {...props} />
        ))}
        <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
        <OrbitControls />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={1.5}
            intensity={0.7}
          />
        </EffectComposer>
      </WebGPU>
    </main>
  );
}

useGLTF.preload("/glb/serim/Serim_Scene_2_Ground.gltf");
