import styled from "@emotion/styled";
import ArrowRight from "../../assets/다음.svg";
import { container } from "../../Shared/UI/common";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useProfileStore from "../../Entites/Store/profileStore";

const Container = styled.div`
    ${container}
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.01);
    }
    
    &:active {
        opacity: 0.8;
        transform: scale(0.99);
    }
`;

const Card = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(2px);
    width: 100%;
    box-sizing: border-box;
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;

const NameText = styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const LoginText = styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-in-out;
`;

const ProfileCard = () => {
    const navigate = useNavigate();
    const { profile, isLoading, error, fetchProfile } = useProfileStore();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetchProfile();
        } else {
            setIsLoggedIn(false);
        }
    }, [fetchProfile]);
    
    const handleClick = () => {
        if (isLoggedIn) {
            navigate("/profile/edit");
        } else {
            navigate("/login");
        }
    };
    
    if (!isLoggedIn) {
        return (
            <Container onClick={handleClick}>
                <Card>
                    <CardContainer>
                        <LoginText>로그인하고 프로필을 확인하세요</LoginText>
                    </CardContainer>
                    <ArrowIcon src={ArrowRight} alt="arrow-right" />
                </Card>
            </Container>
        );
    }
    
    if (isLoading) {
        return <Container>로딩 중...</Container>;
    }
    
    if (error) {
        return <Container>에러: {error}</Container>;
    }
    
    return (
        <Container onClick={handleClick}>
            <Card>
                <CardContainer>
                    <ImageContainer 
                        src={profile?.profileImageUrl || "https://placehold.co/60x60"} 
                        alt="profile" 
                    />
                    <NameText>{profile?.username || "사용자"}</NameText>
                </CardContainer>
                <ArrowIcon src={ArrowRight} alt="arrow-right" />
            </Card>
        </Container>
    );
};

export default ProfileCard;