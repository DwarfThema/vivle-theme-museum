import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface Imodel {
  meshDir: string;
  meshName: string;
  mtlName: any;
}

export function Model({ meshDir, meshName, mtlName }: Imodel) {
  const { nodes, materials } = useGLTF(meshDir) as GLTF & any;

  const model = nodes[`${meshName}`] as THREE.Mesh;
  const mtl = materials[`${mtlName}`] as THREE.MeshStandardMaterial;

  return (
    <group dispose={null}>
      <mesh castShadow receiveShadow geometry={model.geometry} material={mtl} />
    </group>
  );
}

//useGLTF.preload("/glb/JEOUNGEUN_join.gltf");
