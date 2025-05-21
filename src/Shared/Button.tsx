/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
    text: string;
}

const buttonStyle = css`
    width: 329px;
    height: 35px;
    background-color: #6425BE;
    color: #FFFFFF;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div css={buttonStyle}>
            {text}
        </div>
    );
};

export default Button; 