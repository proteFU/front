import styled from "@emotion/styled";
import ArrowRight from "../../assets/다음.svg";
import { container } from "../../Shared/UI/common";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    ${container}
    &:hover {
        cursor: pointer;
        scale: 1.01;
        transition: scale 0.3s ease-in-out;
    }
    &:active {
        opacity: 0.5;
        scale: 0.99;
        transition: scale 0.3s ease-in-out;
    }
`;


const Card = styled.div`
    display: flex;
    padding: 4px 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(2px);
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const NameText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ProfileCard = () => {
    const name = "김철수";
    const profile = "https://placehold.co/60x60";
    const navigate = useNavigate();
    
    return (
        <Container onClick={() => navigate("/profile/edit")}>
            <Card>
                <CardContainer>
                    <ImageContainer src={profile} />
                <NameText>
                    {name}
                </NameText>
            </CardContainer>
                <img src={ArrowRight} alt="arrow-right" />
            </Card>
        </Container>
    )
}

export default ProfileCard;