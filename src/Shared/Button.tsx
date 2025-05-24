/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
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
    position: relative;
    overflow: hidden;
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        console.log(true);
        if (onClick) onClick();
    };

    return (
        <div css={buttonStyle} onClick={handleClick}>
            {text}
        </div>
    );
};

export default Button; 