import { jsx as _jsx } from "react/jsx-runtime";
import { useGLTF } from "@react-three/drei";
import skyScene from "../../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta;
        }
    });
    return (_jsx("mesh", { ref: skyRef, children: _jsx("primitive", { object: sky.scene }) }));
};
export default Sky;
