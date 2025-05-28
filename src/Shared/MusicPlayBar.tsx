/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from '@emotion/react';
import left from "../assets/left.png";
import right from "../assets/right.png";
import ing from "../assets/ing.png";
import stop from "../assets/stop.png";

interface MusicPlayBarProps {
    isPlaying: boolean;
    onPlayStateChange: (isPlaying: boolean) => void;
}

function MusicPlayBar({ isPlaying, onPlayStateChange }: MusicPlayBarProps) {
    const togglePlay = () => {
        onPlayStateChange(!isPlaying);
    };
    
    return (
        <div css={wrapper}>
            <div css={Line}></div>
            <div css={container}>
                <img src={left} alt="left" />
                <img
                    src={isPlaying ? ing : stop}
                    alt={isPlaying ? "playing" : "stopped"}
                    onClick={togglePlay}
                    css={PlayStyle}
                />
                <img src={right} alt="right" />
            </div>
        </div>
    );
}

const wrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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