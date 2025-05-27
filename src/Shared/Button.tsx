/** @jsxImportSource @emotion/react */
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

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <div css={buttonStyle} onClick={onClick}>
            {text}
        </div>
    );
};

export default Button; 