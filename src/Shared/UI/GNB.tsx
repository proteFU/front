import styled from "@emotion/styled";
import Home from "../../assets/GNB/홈.svg";
import Emotion from "../../assets/GNB/감정.svg";
import Favorite from "../../assets/GNB/하트.svg";
import Profile from "../../assets/GNB/프로필.svg";
import UsedHome from "../../assets/GNB/active/홈.svg";
import UsedEmotion from "../../assets/GNB/active/감정.svg";
import UsedFavorite from "../../assets/GNB/active/하트.svg";
import UsedProfile from "../../assets/GNB/active/프로필.svg";
import { useNavigate, useLocation } from "react-router-dom";

const GNBContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 32px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    border-radius: 8px 8px 0px 0px;
    background: rgba(204, 204, 204, 0.50);
    backdrop-filter: blur(10px);
`;

const GNBButton = styled.div`
    display: flex;
    width: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const Text = styled.span`
    color: #F2EAFD;
    text-align: center;
    font-family: "SF Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const UsedText = styled.span`
    color: #6425BE;
`;

const GNBImage = styled.img`
    width: 24px;
    height: 24px;
`;  

const GNB = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <GNBContainer>
            <GNBButton>
                <GNBImage src={isActive("/") ? UsedHome : Home} alt="home" onClick={() => navigate("/")}/>
                {isActive("/") ? <UsedText>Home</UsedText> : <Text>Home</Text>}
            </GNBButton>
            <GNBButton>
                <GNBImage src={isActive("/choose-emotion") || isActive("/music-player") || isActive("/music-detail") ? UsedEmotion : Emotion} alt="emotion" onClick={() => navigate("/choose-emotion")}/>
                {isActive("/choose-emotion") || isActive("/music-player") || isActive("/music-detail") ? <UsedText>Emotion</UsedText> : <Text>Emotion</Text>}
            </GNBButton>
            <GNBButton>
                <GNBImage src={isActive("/favorite") ? UsedFavorite : Favorite} alt="favorite" onClick={() => navigate("/favorite")}/>
                {isActive("/favorite") ? <UsedText>Favorite</UsedText> : <Text>Favorite</Text>}
            </GNBButton>
            <GNBButton>
                <GNBImage src={isActive("/profile") || isActive("/login") || isActive("/sign-up") ? UsedProfile : Profile} alt="profile" onClick={() => navigate("/profile")}/>
                {isActive("/profile") || isActive("/login") || isActive("/sign-up") ? <UsedText>Profile</UsedText> : <Text>Profile</Text>}
            </GNBButton>
        </GNBContainer>
    )
}

export default GNB;