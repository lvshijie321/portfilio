import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAnimations, useGLTF } from "@react-three/drei";
import scene from "../../assets/3d/fox.glb";
import { useEffect, useRef } from "react";
const Fox = ({ currentAnimation }) => {
    const ref = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        Object.values(actions).forEach((action) => {
            action?.stop();
        });
        if (actions[currentAnimation]) {
            actions[currentAnimation]?.play();
        }
    }, [actions, currentAnimation]);
    return (_jsx("group", { ref: ref, position: [0.5, 0.35, 0], rotation: [12.629, -0.6, 0], scale: [0.5, 0.5, 0.5], dispose: null, children: _jsxs("group", { name: "Sketchfab_Scene", children: [_jsx("primitive", { object: nodes.GLTF_created_0_rootJoint }), _jsx("skinnedMesh", { name: "Object_7", geometry: nodes.Object_7.geometry, material: materials.PaletteMaterial001, skeleton: nodes.Object_7.skeleton }), _jsx("skinnedMesh", { name: "Object_8", geometry: nodes.Object_8.geometry, material: materials.PaletteMaterial001, skeleton: nodes.Object_8.skeleton }), _jsx("skinnedMesh", { name: "Object_9", geometry: nodes.Object_9.geometry, material: materials.PaletteMaterial001, skeleton: nodes.Object_9.skeleton }), _jsx("skinnedMesh", { name: "Object_10", geometry: nodes.Object_10.geometry, material: materials.PaletteMaterial001, skeleton: nodes.Object_10.skeleton }), _jsx("skinnedMesh", { name: "Object_11", geometry: nodes.Object_11.geometry, material: materials.PaletteMaterial001, skeleton: nodes.Object_11.skeleton })] }) }));
};
export default Fox;
