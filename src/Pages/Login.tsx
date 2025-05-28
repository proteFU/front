import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { background } from "../Shared/UI/common";
import Container from "../widgets/Profile/Container";
import HeadText from "../Shared/UI/HeadText";
import { InputContainer, InnerContainer, InputLabel, StyledInput } from "../Shared/UI/Input";
import ButtonFunction from "../Shared/UI/Button";
import axios from "axios";
import Cancel from "../assets/취소.svg";
import { useMutation } from '@tanstack/react-query';
import api from "../api/axios";

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

    const loginMutation = useMutation({
        mutationFn: async (formData: { username: string; password: string }) => {
            console.log('로그인 시도:', formData);
            try {
                const response = await axios.post('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/users/login', {
                    email: formData.username,
                    password: formData.password
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                console.log('로그인 응답:', response);
                console.log('응답 헤더:', response.headers);
                console.log('Set-Cookie 헤더:', response.headers['set-cookie']);
                return response.data;
            } catch (error: any) {
                console.log('로그인 에러 발생:', error);
                if (error.response) {
                    console.log('에러 응답 데이터:', error.response.data);
                    console.log('에러 상태 코드:', error.response.status);
                }
                throw error;
            }
        },
        onSuccess: async (data) => {
            console.log('로그인 성공:', data);
            try {
                const profileResponse = await api.get('/users/profile');
                console.log('프로필 정보:', profileResponse.data);
                console.log('로그인 성공 후 쿠키:', document.cookie);
                alert('로그인되었습니다.');
                navigate('/', { replace: true });
            } catch (error) {
                console.error('프로필 정보 조회 실패:', error);
                alert('로그인되었지만 프로필 정보를 가져오는데 실패했습니다.');
                navigate('/', { replace: true });
            }
        },
        onError: (error: any) => {
            console.log('전체 에러 객체:', error);
            if (error.response) {
                console.log('서버 응답 에러:', error.response.data);
                alert(error.response.data.message || '로그인에 실패했습니다.');
            } else if (error.request) {
                console.log('요청 에러:', error.request);
                alert('서버에 연결할 수 없습니다.');
            } else {
                console.log('기타 에러:', error.message);
                alert('로그인 중 오류가 발생했습니다.');
            }
        }
    });

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault(); // 폼 제출 기본 동작 방지
        }
        if (!email || !password) {
            alert('이메일과 비밀번호를 모두 입력해주세요.');
            return;
        }
        console.log('로그인 시도 전:', { email, password });
        loginMutation.mutate(
            { username: email, password },
            {
                onSuccess: (data) => {
                    console.log('로그인 성공 데이터:', data);
                },
                onError: (error) => {
                    console.log('로그인 에러:', error);
                }
            }
        );
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