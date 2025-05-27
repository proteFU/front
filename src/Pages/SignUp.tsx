import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { background } from "../Shared/UI/common";
import Container from "../widgets/Profile/Container";
import HeadText from "../Shared/UI/HeadText";
import { InputContainer, InnerContainer, InputLabel, StyledInput } from "../Shared/UI/Input";
import ButtonFunction from "../Shared/UI/Button";
import axios from "axios";
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

    const handleSubmit = async () => {
        
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/users/sign-up', {
                username,
                email,
                password,
            });

            if (response.status === 200) {
                alert('회원가입이 완료되었습니다.');
                navigate('/login');
            } else {
                alert('회원가입에 실패했습니다.');
            }
        } catch (error) {
            alert('회원가입 중 오류가 발생했습니다.');
        }
    };

    return (
        <Background>
            <Container>
                <HeadText text="회원가입" />
                <Form>
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
                                placeholder={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Password</InputLabel>
                            <StyledInput 
                                placeholder={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InnerContainer>
                        <InnerContainer>
                            <InputLabel>Password Check</InputLabel>
                            <StyledInput 
                                placeholder={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </InnerContainer>
                    </InputContainer>
                    <ButtonFunction text="회원가입" onClick={handleSubmit} />
                </Form>
                <LoginLink>
                    이미 계정이 있으신가요?
                    <a href="/login">로그인</a>
                </LoginLink>
            </Container>
        </Background>
    );
};

export default SignUp; 