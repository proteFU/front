import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { background } from "../Shared/UI/common";
import Container from "../widgets/Profile/Container";
import HeadText from "../Shared/UI/HeadText";
import { InputContainer, InnerContainer, InputLabel, StyledInput } from "../Shared/UI/Input";
import ButtonFunction from "../Shared/UI/Button";
import Cancel from "../assets/취소.svg";

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
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!username || !email || !password || !confirmPassword) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 임시 회원가입 처리
        const mockUser = {
            email: email,
            username: username,
            profileImageUrl: "https://placehold.co/60x60"
        };

        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isLoggedIn', 'true');

        alert('회원가입이 완료되었습니다.');
        navigate('/', { replace: true });

        /* API 회원가입 로직 (주석 처리)
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
        */
    };

    return (
        <Background>
            <Container>
                <HeadText text="Sign Up" img={Cancel} onClick={() => navigate(-1)}/>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <InnerContainer>
                            <InputLabel>Name</InputLabel>
                            <StyledInput 
                                name="username"
                                type="text"
                                autoComplete="name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Email</InputLabel>
                            <StyledInput 
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Password</InputLabel>
                            <StyledInput 
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Confirm Password</InputLabel>
                            <StyledInput 
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={confirmPassword}
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