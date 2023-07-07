import { Detailed, useGLTF } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { createRef, useEffect, useRef, useState } from "react";
import { Mesh, MeshStandardMaterial, TextureLoader } from "three";

const imgUrls = [
  "/glb/serim/stars/1.png",
  "/glb/serim/stars/2.png",
  "/glb/serim/stars/3.png",
  "/glb/serim/stars/4.png",
  "/glb/serim/stars/5.png",
  "/glb/serim/stars/6.png",
  "/glb/serim/stars/7.png",
  "/glb/serim/stars/8.png",
  "/glb/serim/stars/9.png",
  "/glb/serim/stars/10.png",
  "/glb/serim/stars/11.png",
  "/glb/serim/stars/12.png",
  "/glb/serim/stars/13.png",
  "/glb/serim/stars/14.png",
  "/glb/serim/stars/15.png",
  "/glb/serim/stars/16.png",
  "/glb/serim/stars/17.png",
  "/glb/serim/stars/18.png",
  "/glb/serim/stars/19.png",
  "/glb/serim/stars/20.png",
  "/glb/serim/stars/21.png",
  "/glb/serim/stars/22.png",
  "/glb/serim/stars/23.png",
  "/glb/serim/stars/24.png",
  "/glb/serim/stars/25.png",
  "/glb/serim/stars/26.png",
  "/glb/serim/stars/27.png",
  "/glb/serim/stars/28.png",
  "/glb/serim/stars/29.png",
  "/glb/serim/stars/30.png",
  "/glb/serim/stars/31.png",
  "/glb/serim/stars/32.png",
  "/glb/serim/stars/33.png",
  "/glb/serim/stars/34.png",
  "/glb/serim/stars/35.png",
  "/glb/serim/stars/36.png",
  "/glb/serim/stars/37.png",
  "/glb/serim/stars/38.png",
  "/glb/serim/stars/39.png",
  "/glb/serim/stars/40.png",
];

const minIntensity = 0.8;
const maxIntensity = 1;

export default function StarsBg(props: any) {
  const textures = useLoader(TextureLoader, imgUrls);
  const { camera } = useThree();
  const meshRefs = useRef<(React.RefObject<Mesh> | null)[]>([]);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    setOffsets(imgUrls.map(() => Math.random() * Math.PI * 1));
    meshRefs.current = imgUrls.map(() => createRef<Mesh>());
  }, []);

  useFrame(({ clock }) => {
    meshRefs?.current?.forEach((ref, i) => {
      if (ref?.current) {
        ref.current.lookAt(camera.position);
        (ref.current.material as MeshStandardMaterial).emissiveIntensity =
          ((Math.sin(clock.getElapsedTime() + offsets[i]) + 1) / 2) *
          (maxIntensity - minIntensity);
      }
    });
  });

  const planes = imgUrls.map((_, i) => (
    <mesh receiveShadow castShadow key={i} ref={meshRefs.current[i]}>
      <planeBufferGeometry args={[2, 2]} attach="geometry" />
      <meshStandardMaterial
        map={textures[i]}
        emissive={"#ffffe4"}
        attach="material"
        transparent={true}
      />
    </mesh>
  ));

  return (
    <Detailed distances={[0, 15, 25, 35, 100]} {...props}>
      {planes}
      <group />
    </Detailed>
  );
}
