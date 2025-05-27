import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";
import album from '../shared/assets/album.svg';
const lyrics = [
  { text: "How do I look? 내가 변했나구?" },
  { text: "티비를 틀어봐 I'm the woman on the moon", isHighlight: true },
  { text: "네 머리 위로 사뿐사뿐 걸어 feel no gravity" }
];

const Container = styled.article`
  width: 361px;
  height: 798px;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  color: white;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const AlbumContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AlbumArt = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SongInfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Artist = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
`;

const LyricsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 4px;
  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LyricLine = styled.div<{ isHighlight?: boolean }>`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  color: ${props => props.isHighlight ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: ${props => props.isHighlight ? '500' : 'normal'};
`;

const ProgressContainer = styled.div`
  margin-top: auto;
  padding: 20px 0;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1.5px;
  margin-bottom: 4px;
`;

const Progress = styled.div`
  width: 30%;
  height: 100%;
  background: white;
  border-radius: 1.5px;
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const Controls = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;

function App() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container>
      <StatusBar>
        <span>2:54</span>
      </StatusBar>
      
      <Header>
        <BackButton onClick={() => navigate(-1)}>←</BackButton>
      </Header>

      <HeaderContent>
        <AlbumContainer>
          <AlbumArt>
            <img src={album} alt="Bad News" />
          </AlbumArt>
          <SongInfoContainer>
            <Title>Bad News</Title>
            <Artist>kiss of life</Artist>
          </SongInfoContainer>
        </AlbumContainer>
        <LikeButton>♡</LikeButton>
      </HeaderContent>

      <LyricsContainer>
        {lyrics.map((lyric, index) => (
          <LyricLine 
            key={index} 
            isHighlight={index === 1}
          >
            {lyric.text}
          </LyricLine>
        ))}
      </LyricsContainer>

      <ProgressContainer>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <TimeInfo>
          <span>0:00</span>
          <span>3:30</span>
        </TimeInfo>
      </ProgressContainer>

      <Controls>
        <ControlButton>⏮</ControlButton>
        <ControlButton onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </ControlButton>
        <ControlButton>⏭</ControlButton>
      </Controls>
    </Container>
  );
}

export default App;