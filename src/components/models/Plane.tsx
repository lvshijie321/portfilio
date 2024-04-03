import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import planeScene from "../../assets/3d/plane.glb";

interface PlaneProps {
  isRotating: boolean;
  position: number[];
  scale: number[];
  rotation: number[];
}
const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
  const ref = useRef<any>();
  const { scene, animations } = useGLTF(planeScene) as any;
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
