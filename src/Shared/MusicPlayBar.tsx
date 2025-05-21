import { useState } from "react";
import { css } from '@emotion/css';
import left from "../assets/left.png";
import right from "../assets/right.png";
import ing from "../assets/ing.png";
import stop from "../assets/stop.png";

function MusicPlayBar() {
    const [isPlaying, setIsPlaying] = useState(true); 

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    
    return (
        <>
            <div className={Line}>.</div>
            <div className={container}>
            <img src={left} alt="left" />
            <img
                src={isPlaying ? ing : stop}
                alt={isPlaying ? "playing" : "stopped"}
                onClick={togglePlay}
                className={PlayStyle}
            />
            <img src={right} alt="right" />
            </div>
        </>
    );
}

const container = css`
    display: flex;
    position: relative;
    width: 224px;
    gap: 40px;
    margin-top: 24px;
    align-items: center;
`;

const PlayStyle = css`
    cursor: pointer;
`;

const Line = css`
    width: 100%;
    height: 4px;
    background-color: #fff;
    border: #fff;
    margin-top: 52px;
`;


export default MusicPlayBar;
