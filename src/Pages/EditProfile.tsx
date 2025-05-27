import { background } from "../Shared/UI/common";
import HeadText from "../Shared/UI/HeadText";
import styled from "@emotion/styled";
import Cancel from "../assets/취소.svg";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import ButtonFunction from "../Shared/UI/Button";
import { HiddenInput, InputContainer, InnerContainer, InputLabel, StyledInput } from "../Shared/UI/Input";
//import axios from "axios";

const Background = styled.div`
    ${background}
`;

const Container = styled.div`
    display: flex;
    margin-top: 44px;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    padding: 0 32px;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImageContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const ProfileImage = styled.img<{ width?: string, height?: string }>`
    width?: ${props => props.width || "100px"};
    height?: ${props => props.height || "100px"};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const CameraIconContainer = styled.div<{ disabled?: boolean }>`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    width: 34px;
    height: 34px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: ${props => props.disabled ? '#4A4A4A' : '#67636D'};
    border-radius: 50%;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const ProfileModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ProfileModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CameraIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 17.5C13.75 17.5 14.8125 17.0625 15.6875 16.1875C16.5625 15.3125 17 14.25 17 13C17 11.75 16.5625 10.6875 15.6875 9.8125C14.8125 8.9375 13.75 8.5 12.5 8.5C11.25 8.5 10.1875 8.9375 9.3125 9.8125C8.4375 10.6875 8 11.75 8 13C8 14.25 8.4375 15.3125 9.3125 16.1875C10.1875 17.0625 11.25 17.5 12.5 17.5ZM12.5 15.5C11.8 15.5 11.2083 15.2583 10.725 14.775C10.2417 14.2917 10 13.7 10 13C10 12.3 10.2417 11.7083 10.725 11.225C11.2083 10.7417 11.8 10.5 12.5 10.5C13.2 10.5 13.7917 10.7417 14.275 11.225C14.7583 11.7083 15 12.3 15 13C15 13.7 14.7583 14.2917 14.275 14.775C13.7917 15.2583 13.2 15.5 12.5 15.5ZM4.5 21C3.95 21 3.47917 20.8042 3.0875 20.4125C2.69583 20.0208 2.5 19.55 2.5 19V7C2.5 6.45 2.69583 5.97917 3.0875 5.5875C3.47917 5.19583 3.95 5 4.5 5H7.65L9.5 3H15.5L17.35 5H20.5C21.05 5 21.5208 5.19583 21.9125 5.5875C22.3042 5.97917 22.5 6.45 22.5 7V19C22.5 19.55 22.3042 20.0208 21.9125 20.4125C21.5208 20.8042 21.05 21 20.5 21H4.5Z" fill="white"/>
    </svg>
);

const StyledButtonFunction = styled(ButtonFunction)<{ disabled?: boolean }>`
    position: relative;
    z-index: 1;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
    & > button {
        opacity: ${props => props.disabled ? 0.5 : 1};
        background: ${props => props.disabled ? '#4A4A4A' : '#67636D'};
    }
`;

const EditProfile = () => {
    const navigate = useNavigate();
    const defaultProfile = "https://placehold.co/140x140";
    const [profileImage, setProfileImage] = useState(defaultProfile);
    const [name, setName] = useState("dpqlssl");
    const [email, setEmail] = useState("Yebbin@gmail.com");
    const [profileModal, setProfileModal] = useState(false);
    const [isCheckingEmail, setIsCheckingEmail] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCancel = () => {
        navigate(-1);
    }

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB 제한
                alert("파일 크기는 5MB를 초과할 수 없습니다.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const checkEmailAvailability = async (emailToCheck: string): Promise<boolean> => {
        if (!emailToCheck) {
            alert("이메일을 입력해주세요.");
            return false;
        }
        if (!emailToCheck.includes("@")) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }

        setIsCheckingEmail(true);
        try {
            // TODO: 실제 API 호출로 대체
            const response: { exists: boolean } = await new Promise(resolve => 
                setTimeout(() => resolve({ exists: false }), 1000)
            );
            
            if (response.exists) {
                alert("이미 사용 중인 이메일입니다.");
                return false;
            }
            return true;
        } catch (error) {
            alert("이메일 중복 확인 중 오류가 발생했습니다.");
            return false;
        } finally {
            setIsCheckingEmail(false);
        }
    };

    const handleSave = async () => {
        const isEmailAvailable = await checkEmailAvailability(email);
        //const response = await axios.
        if (!isEmailAvailable) {
            return;
        }

        // TODO: 저장 로직 구현
        alert("프로필이 저장되었습니다.");
    };

    return (
        <Background>
            <HeadText text="Edit Profile" img={Cancel} onClick={handleCancel} />
            <Container>
                <ProfileContainer>
                    <ProfileImageContainer>
                        <ProfileImage src={profileImage} width="140px" height="140px" onClick={() => setProfileModal(true)} />
                        {profileModal && (
                            <ProfileModal onClick={() => setProfileModal(false)}>
                                <ProfileModalContent>
                                    <ProfileImage src={profileImage} width="200px" height="200px" />
                                </ProfileModalContent>
                            </ProfileModal>
                        )} 
                        <CameraIconContainer 
                            onClick={profileModal ? undefined : handleImageClick}
                            disabled={profileModal}
                        >
                            <CameraIcon />
                        </CameraIconContainer>
                        <HiddenInput
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </ProfileImageContainer>
                </ProfileContainer>
                <InputContainer>
                    <InnerContainer>
                        <InputLabel>Name</InputLabel>
                        <StyledInput 
                            placeholder={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InnerContainer>
                    <InnerContainer>
                        <InputLabel>Address</InputLabel>
                        <StyledInput 
                            placeholder={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InnerContainer>
                </InputContainer>
                <StyledButtonFunction 
                    text={isCheckingEmail ? "Checking..." : "Save"} 
                    onClick={() => !profileModal && handleSave()}
                    disabled={profileModal}
                />
            </Container>
        </Background>
    )
}

export default EditProfile;