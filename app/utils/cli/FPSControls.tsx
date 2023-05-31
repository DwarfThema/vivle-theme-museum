import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";

const SPEED = 0.003;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

export const FPSControls: React.FC = () => {
  const { camera, gl } = useThree();
  const velocity = useRef(new THREE.Vector3());

  useEffect(() => {
    const onKeyDown = (event: any) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          moveForward = true;
          break;

        case "KeyA":
        case "ArrowLeft":
          moveLeft = true;
          break;

        case "KeyS":
        case "ArrowDown":
          moveBackward = true;
          break;

        case "KeyD":
        case "ArrowRight":
          moveRight = true;
          break;
      }
    };

    const onKeyUp = (event: any) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          moveForward = false;
          break;

        case "KeyA":
        case "ArrowLeft":
          moveLeft = false;
          break;

        case "KeyS":
        case "ArrowDown":
          moveBackward = false;
          break;

        case "KeyD":
        case "ArrowRight":
          moveRight = false;
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("keyup", onKeyUp, false);
    };
  }, []);

  camera.position.set(0, 1, 0);

  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    if (moveForward) velocity.current.addScaledVector(direction, SPEED);
    if (moveBackward) velocity.current.addScaledVector(direction, -SPEED);
    if (moveLeft)
      velocity.current.addScaledVector(
        new THREE.Vector3(direction.z, 0, -direction.x),
        SPEED
      );
    if (moveRight)
      velocity.current.addScaledVector(
        new THREE.Vector3(-direction.z, 0, direction.x),
        SPEED
      );

    camera.position.add(velocity.current);
    velocity.current.multiplyScalar(0.9);
  });

  return <PointerLockControls />;
};
