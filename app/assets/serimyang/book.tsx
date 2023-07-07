import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { IPos, IScale } from "@/app/utils/cli/properties";

interface Imodel {
  meshDir: string;
  meshName: string;
  mtlName: any;
  pos?: IPos;
  scale?: IScale;
}

export function Book({ pos, scale }: Imodel) {
  return null;
}

useGLTF.preload("/glb/JEOUNGEUN_join.gltf");
