import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Group"]: THREE.Mesh;
  };
  materials: {
    Sculpture: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/glb/JEOUNGEUN_join.gltf"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Group"].geometry}
        material={materials.Sculpture}
      />
    </group>
  );
}

useGLTF.preload("/glb/JEOUNGEUN_join.gltf");
