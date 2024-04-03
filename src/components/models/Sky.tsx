import { useGLTF } from "@react-three/drei";
import skyScene from "../../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface SkyProps {
  isRotating: boolean;
}

const Sky: React.FC<SkyProps> = ({ isRotating }) => {
  const sky = useGLTF(skyScene) as any;
  const skyRef = useRef<any>();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
