import { jsx as _jsx } from "react/jsx-runtime";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import planeScene from "../../assets/3d/plane.glb";
const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        if (isRotating) {
            actions["Take 001"]?.play();
        }
        else {
            actions["Take 001"]?.stop();
        }
    }, [isRotating, actions]);
    return (_jsx("mesh", { ref: ref, ...props, children: _jsx("primitive", { object: scene }) }));
};
export default Plane;
