import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import back from "../../assets/arrow.svg";
import "../../App/App.css";

const BackButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 24px 0;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    opacity: 0.7;
`;

const BackIcon = () => {
    const navigate = useNavigate();

    return (
        <BackButton onClick={() => navigate(-1)}>
            <Icon src={back} alt="Back" />
        </BackButton>
    );
};

export default BackIcon; 