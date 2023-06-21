import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { IPos, IScale } from "./properties";

interface Imodel {
  meshDir: string;
  meshName: string;
  mtlName: any;
  pos?: IPos;
  scale?: IScale;
}

export function Model({ meshDir, meshName, mtlName, pos, scale }: Imodel) {
  const { nodes, materials } = useGLTF(meshDir) as GLTF & any;

  const model = nodes[`${meshName}`] as THREE.Mesh;
  const mtl = materials[`${mtlName}`] as THREE.MeshStandardMaterial;

  return (
    <group
      dispose={null}
      position={
        pos?.x == undefined || pos?.y == undefined || pos?.z == undefined
          ? [0, 0, 0]
          : [pos.x, pos.y, pos.z]
      }
      scale={
        scale?.x == undefined || scale?.y == undefined || scale?.z == undefined
          ? [1, 1, 1]
          : [scale.x, scale.y, scale.z]
      }
    >
      <mesh castShadow receiveShadow geometry={model.geometry} material={mtl} />
    </group>
  );
}

useGLTF.preload("/glb/JEOUNGEUN_join.gltf");
