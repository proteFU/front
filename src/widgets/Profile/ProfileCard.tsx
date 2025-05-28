<<<<<<< HEAD
import styled from "@emotion/styled";
import ArrowRight from "../../assets/다음.svg";
import { container } from "../../shared/ui/common";
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 2f19b89e8e9378e79538fa52aab6cd3637cf5998
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ButtonFunction from "../../Shared/UI/Button";
import styled from "@emotion/styled";
import api from "../../api/axios";

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

const ProfileName = styled.h2`
    color: white;
    font-size: 24px;
    margin: 0;
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
        const checkLoginStatus = async () => {
            try {
                const response = await api.get('/users/profile');
                console.log('프로필 데이터:', response.data);
                setProfileData(response.data);
                setIsLoggedIn(true);
            } catch (error: any) {
                console.log('프로필 조회 에러:', error);
                if (error.response?.status === 401) {
                    setIsLoggedIn(false);
                } else {
                    console.error('프로필 조회 중 오류 발생:', error);
                }
            }
        };
        checkLoginStatus();
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
                    <ProfileName>{profileData.username}</ProfileName>
                    <ProfileEmail>{profileData.email}</ProfileEmail>
                </ProfileInfo>
            )}
        </Container>
    );
};

export default ProfileCard;