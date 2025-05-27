import styled from "@emotion/styled";
import type { ButtonProps } from "../../types/Button";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    border-radius: 24px;
    opacity: 0.8;
    cursor: pointer;
    border: none;
    background-color: #6425BE;
    color: #FFF;
    padding: 12px 0;
`;

const Text = styled.span`
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const ButtonFunction = ({text, onClick}: ButtonProps) => {
    return (
        <Button onClick={onClick}>
            <Text>{text}</Text>
        </Button>
    )
}

export default ButtonFunction;