import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import album from "../assets/album.png";
import MusicPlayBar from "../shared/ui/MusicPlayBar";
import "../App/App.css";

const Container = styled.div`
  width: 361px;
  height: 798px;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`;

const Header = styled.div`
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

interface AlbumArtProps {
  isPlaying: boolean;
}

const AlbumArt = styled.div<AlbumArtProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${props => props.isPlaying ? 'rotate 10s linear infinite' : 'none'};

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SongInfo = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
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

const lyrics = [
  "How do I look? 내가 변했나구?",
  "티비를 틀어봐 I'm the woman on the moon",
  "네 머리 위로 사뿐사뿐 걸어 feel no gravity",
  "우린 어떤 때보다도 ain't no diggity",
  "What goes around, some comes around",
  "안 들려, 몰라",
  "Look at me now 느낌이 와, 다르지 너와",
  "I'm your wannabe 입 밖으론 못 뱉지",
  "Uh-oh, can't you see? Can't you see?",
  "Runnin', runnin', runnin', runnin'",
  "Something's comin', comin', comin' (ah)"
];

const PlayMusic = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalDuration = 210; 

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handlePlayPause = (playing: boolean) => {
    setIsPlaying(playing);
  };

  return (
      <Container>
        
        <Header>
          <BackButton onClick={() => navigate(-1)}>←</BackButton>
        </Header>

        <HeaderContent>
          <AlbumContainer>
            <AlbumArt isPlaying={isPlaying}>
              <img src={album} alt="Bad News" />
            </AlbumArt>
            <SongInfo>
              <Title>Bad News</Title>
              <Artist>kiss of life</Artist>
            </SongInfo>
          </AlbumContainer>
          <LikeButton>♡</LikeButton>
        </HeaderContent>

        <LyricsContainer>
          {lyrics.map((lyric, index) => (
            <LyricLine 
              key={index} 
              isHighlight={index === 1}
            >
              {lyric}
            </LyricLine>
          ))}
        </LyricsContainer>

        <MusicPlayBar 
          isPlaying={isPlaying} 
          onPlayPause={handlePlayPause}
          currentTime={currentTime}
          totalDuration={totalDuration}
        />
      </Container>
  );
};

export default PlayMusic; 