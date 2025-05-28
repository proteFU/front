import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ButtonFunction from "../../Shared/UI/Button";
import styled from "@emotion/styled";

interface ProfileData {
    username: string;
    email: string;
    profileImageUrl: string;
}

const LoginPrompt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 32px;
`;

const LoginText = styled.p`
    color: white;
    font-size: 16px;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 32px;
`;

const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
`;

const WelcomeMessage = styled.h2`
    color: white;
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
`;

const ProfileEmail = styled.p`
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin: 0;
`;

const ProfileCard = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const loginStatus = localStorage.getItem('isLoggedIn');
        
        if (savedUser && loginStatus === 'true') {
            const user = JSON.parse(savedUser);
            setProfileData(user);
            setIsLoggedIn(true);
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <Container>
                <LoginPrompt>
                    <LoginText>로그인이 필요합니다</LoginText>
                    <ButtonFunction text="로그인하기" onClick={() => navigate('/login')} />
                </LoginPrompt>
            </Container>
        );
    }

    return (
        <Container>
            {profileData && (
                <ProfileInfo>
                    <ProfileImage 
                        src={profileData.profileImageUrl || "https://placehold.co/120x120"} 
                        alt="프로필 이미지" 
                    />
                    <WelcomeMessage>{profileData.username}님, 환영합니다!</WelcomeMessage>
                    <ProfileEmail>{profileData.email}</ProfileEmail>
                </ProfileInfo>
            )}
        </Container>
    );
};

export default ProfileCard;