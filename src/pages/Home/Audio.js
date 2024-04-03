import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { soundon, soundoff } from "../../assets/icons";
import sakura from "../../assets/sakura.mp3";
const AudioPlayer = ({ className }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(sakura));
    const src = useMemo(() => {
        return isPlaying ? soundon : soundoff;
    }, [isPlaying]);
    const togglePlay = useCallback(() => {
        setIsPlaying(!isPlaying);
    }, [isPlaying]);
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
        return () => {
            audioRef.current.pause();
        };
    }, [isPlaying]);
    return _jsx("img", { src: src, className: className, onClick: togglePlay });
};
export default AudioPlayer;
