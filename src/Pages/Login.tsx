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

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/users/login', {
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            } else {
                alert('Login failed.');
            }
        } catch (error) {
            alert('Login failed.');
        }
    };

    return (
        <Background>
            <Container>
                <HeadText text="Login" img={Cancel}/>
                <Form>
                <InputContainer>
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