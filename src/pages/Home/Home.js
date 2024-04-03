import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Audio from "./Audio";
import { Canvas } from "@react-three/fiber";
import { Islands, Bird, Sky, Plane } from "../../components/models";
import { Suspense, useState } from "react";
import { useIslandParams } from "./hooks/island";
import { usePlaneParams } from "./hooks/plane";
import Info from "./Info";
import Loader from "../../components/Loader";
const Home = () => {
    const islandsParams = useIslandParams();
    const planeParams = usePlaneParams();
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    return (_jsxs(_Fragment, { children: [(currentStage === 1 || currentStage === 3) && (_jsx(Info, { currentStage: currentStage })), _jsx(Canvas, { camera: { near: 0.1, far: 1000 }, children: _jsxs(Suspense, { fallback: _jsx(Loader, {}), children: [_jsx("directionalLight", { position: [1, 1, 1], intensity: 2 }), _jsx("ambientLight", { intensity: 0.5 }), _jsx("pointLight", { position: [10, 5, 10], intensity: 2 }), _jsx("spotLight", { position: [0, 50, 10], angle: 0.15, penumbra: 1, intensity: 2 }), _jsx("hemisphereLight", { groundColor: "#000000", intensity: 1 }), _jsx(Islands, { setCurrentStage: setCurrentStage, isRotating: isRotating, setIsRotating: setIsRotating, position: islandsParams.position, rotation: [0.1, 4.7077, 0], scale: islandsParams.scale }), _jsx(Bird, {}), _jsx(Sky, { isRotating: isRotating }), _jsx(Plane, { isRotating: isRotating, position: planeParams.position, rotation: [0, 20.1, 0], scale: planeParams.scale })] }) }), _jsx(Audio, { className: "w-10 absolute left-2 bottom-2 z-10" })] }));
};
export default Home;
