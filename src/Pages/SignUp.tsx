import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { background } from "../shared/ui/common";
import Container from "../widgets/Profile/Container";
import HeadText from "../shared/ui/HeadText";
import { InputContainer, InnerContainer, InputLabel, StyledInput } from "../Shared/UI/Input";
import ButtonFunction from "../Shared/UI/Button";
import api from "../api/axios";
import Cancel from "../assets/취소.svg";
import { useMutation } from '@tanstack/react-query';

const Background = styled.div`
    ${background}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 44px;
    padding: 0 16px;
`;

const ImageUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        border-color: #6425BE;
    }
`;

const ImageInput = styled.input`
    display: none;
`;

const LoginLink = styled.p`
    color: white;
    text-align: center;
    margin-top: 16px;
    
    a {
        color: #6425BE;
        text-decoration: none;
        margin-left: 8px;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const signupMutation = useMutation({
        mutationFn: async (formData: { username: string; password: string; email: string; profileImageUrl: string }) => {
            const response = await api.post('/users/sign-up', formData);
            return response.data;
        },
        onSuccess: () => {
            alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
            navigate('/login');
        },
        onError: (error) => {
            alert('회원가입에 실패했습니다.');
            console.error('Signup error:', error);
        }
    });

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const formData = {
            username,
            password,
            email,
            profileImageUrl: profileImage || "https://placehold.co/60x60"
        };
        signupMutation.mutate(formData);

        if (signupMutation.isSuccess) {
            navigate('/login');
        }
        if (signupMutation.isError) {
            alert('회원가입에 실패했습니다.');
            console.error('Signup error:', signupMutation.error);
        }
    };

    return (
        <Background>
            <Container>
                <HeadText text="Sign Up" img={Cancel} onClick={() => navigate(-1)}/>
                <Form>
                    <ImageUploadContainer>
                        <ProfileImage 
                            src={profileImage} 
                            alt="프로필 이미지" 
                            onClick={handleImageClick}
                        />
                        <ImageInput
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </ImageUploadContainer>
                    <InputContainer>
                        <InnerContainer>
                            <InputLabel>Name</InputLabel>
                            <StyledInput 
                                placeholder={username} 
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Email</InputLabel>
                            <StyledInput 
                                type="email"
                                placeholder={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Password</InputLabel>
                            <StyledInput 
                                type="password"
                                placeholder={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Password Check</InputLabel>
                            <StyledInput 
                                type="password"
                                placeholder={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </InnerContainer>
                    </InputContainer>
                    <ButtonFunction text="Sign Up" onClick={handleSubmit} />
                </Form>
                <LoginLink>
                    Already have an account?
                    <a href="/login">Login</a>
                </LoginLink>
            </Container>
        </Background>
    );
};

export default SignUp; 