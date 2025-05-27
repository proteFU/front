import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 16px;
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: bold;
`;

const NavButton = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background: #67636D;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #7A7680;
    transform: translateY(-2px);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const routes = [
    { path: '/music-player', label: '음악 플레이어' },
    { path: '/profile', label: '프로필' },
    { path: '/profile/edit', label: '프로필 수정' },
    { path: '/music-detail', label: '음악 상세' },
    { path: '/choose-emotion', label: '감정 선택' },
  ];

  return (
    <Container>
      <Title>Prote</Title>
      {routes.map(({ path, label }) => (
        <NavButton key={path} onClick={() => navigate(path)}>
          {label}
        </NavButton>
      ))}
    </Container>
  );
};

export default Home; 