import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export function Player({ lerp = THREE.MathUtils.lerp }) {
  const ref = useRef() as any;
  const rapier = useRapier();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get() as any;

    const velocity = ref.current.linvel();

    //camera Update
    const position = ref.current.translation();
    state.camera.position.set(position.x, position.y, position.z);

    //movemont
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);

    // Apply linear velocity to Player.
    ref.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });

    // Jumping
    const world = rapier.world;
    const ray = world.castRay(
      new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }),
      1.247,
      false
    );

    const grounded = ray && ray.collider && Math.abs(ray.toi) < 1.25;
    console.log(ray);

    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 10, z: 0 });
  });

  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={1}
        type="dynamic"
        position={[0, 10, 0]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  );
}
