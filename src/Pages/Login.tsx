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

const SignUpLink = styled.p`
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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault();
        }
        if (!email || !password) {
            alert('이메일과 비밀번호를 모두 입력해주세요.');
            return;
        }

        // 임시 로그인 처리
        const mockUser = {
            email: email,
            username: email.split('@')[0],
            profileImageUrl: "https://placehold.co/60x60"
        };

        // 로컬 스토리지에 사용자 정보 저장
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isLoggedIn', 'true');

        // 저장된 사용자 정보 가져오기
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            alert(`${user.username}님, 환영합니다!`);
            // 로그인 후 프로필 페이지로 이동
            navigate('/profile', { replace: true });
        } else {
            alert('로그인되었습니다.');
            navigate('/', { replace: true });
        }
    };

    return (
        <Background>
            <Container>
                <HeadText text="Login" img={Cancel} onClick={() => navigate(-1)}/>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
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
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InnerContainer>
                    </InputContainer>
                    <ButtonFunction text="Login" onClick={handleSubmit} />
                </Form>
                <SignUpLink>
                    No account?
                    <a href="/sign-up">Sign Up</a>
                </SignUpLink>
            </Container>
        </Background>
    );
};

export default Login; 