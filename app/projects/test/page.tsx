"use client";

import { Ground } from "@/app/utils/cli/Ground";
import { Model } from "@/app/utils/cli/Model";
import { Player } from "@/app/utils/cli/Player";
import { WebGPU } from "@/app/utils/cli/WebGPU";

import { Environment, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Leva, useControls } from "leva";

export default function JeongeunIndex() {
  return (
    <>
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
        <Canvas camera={{ fov: 45 }}>
          <Environment preset="sunset" background />
          <ambientLight intensity={0.5} />
          <mesh scale={1} position={[0, 0, -1]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="orange" />
          </mesh>
          <Physics gravity={[0, -25, 0]}>
            <RigidBody type="fixed" colliders={false}>
              <mesh
                receiveShadow
                position={[0, -10, 0]}
                rotation-x={-Math.PI / 2}
              >
                <planeGeometry args={[10, 10]} />
              </mesh>
              <CuboidCollider args={[10, 2, 10]} position={[0, -2, 0]} />
            </RigidBody>
            <Player pos={{ x: 0, y: 10, z: 0 }} />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </>
  );
}
