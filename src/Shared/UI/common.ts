import { css } from "@emotion/react";
import BackgroundImage from "../../assets/배경화면.png";

export const container = css`
    width: 100%;
    max-width: 393px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const card = css`
    width: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(2px);
    margin-bottom: 16px;
    box-sizing: border-box;
`; 

export const background = css`
    background: url(${BackgroundImage}) no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;