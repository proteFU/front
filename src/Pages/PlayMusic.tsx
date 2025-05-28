import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import album from "../assets/album.svg";
import MusicPlayBar from "../shared/ui/MusicPlayBar";
import BackIcon from "../shared/ui/BackIcon";
import "../App/App.css";
import NavigateBar from "../shared/ui/NavigateBar";

const Background = styled.div<{ fadeOut: boolean }>`
  width: 100%;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow: hidden;
  transition: opacity 0.8s ease;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
`;

const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

const AlbumArt = styled.img<{ fade: boolean }>`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  animation: spin 6s linear infinite;
  margin-top: 30px;
  transition: opacity 0.6s ease;
  opacity: ${({ fade }) => (fade ? 0 : 1)};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SongTitle = styled.div<{ fade: boolean }>`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  transition: opacity 0.6s ease;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const Artist = styled.div<{ fade: boolean }>`
  font-size: 14px;
  opacity: 0.7;
  margin-top: 4px;
  text-align: center;
  transition: opacity 0.6s ease;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const Lyrics = styled.div<{ fade: boolean }>`
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 24px;
  cursor: pointer;
  transition: opacity 0.6s ease;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const LyricsLine = styled.p<{ isHighlight?: boolean }>`
  margin: 4px 0;
  font-weight: ${({ isHighlight }) => (isHighlight ? 600 : 400)};
  font-size: ${({ isHighlight }) => (isHighlight ? "16px" : "14px")};
  opacity: ${({ isHighlight }) => (isHighlight ? 1 : 0.5)};
`;

const PlayBarWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  padding-bottom: 70px;
`;

const TopWrapper = styled.div`
  width: 100%;
  max-width: 393px;
  padding: 16px 16px 0;
  display: flex;
`;

const Footer = styled.div`
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

interface Song {
  title: string;
  artist: string;
  lyrics: string[];
  albumImg: string;
  duration: number;
}

const songs: Song[] = [
  {
    title: "Bad News",
    artist: "kiss of life",
    albumImg: album,
    duration: 190,
    lyrics: [
      "How do I look? 내가 변했나구?",
      "티비를 틀어봐 I'm the woman on the moon",
      "네 머리 위로 사뿐사뿐 걸어 feel no gravity",
    ],
  },
  {
    title: "Good Vibes",
    artist: "kiss of life",
    albumImg: album,
    duration: 200,
    lyrics: [
      "햇살 속에 눈부신 하루",
      "함께라면 어디든 좋아",
      "우리의 노래가 들려와",
    ],
  },
];

const PlayMusic = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // 애니메이션 상태
  const [fadeOut, setFadeOut] = useState(false);
  const [contentFade, setContentFade] = useState(false);

  const navigate = useNavigate();

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= currentSong.duration) {
          clearInterval(interval);

          setFadeOut(true);
          setContentFade(true);

          setTimeout(() => {
            setCurrentSongIndex((prev) =>
              prev + 1 < songs.length ? prev + 1 : 0
            );
            setCurrentTime(0);
            setFadeOut(false);
            setContentFade(false);
          }, 800);

          return currentSong.duration;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  const handlePlayPause = (play: boolean) => {
    setIsPlaying(play);
  };

  const handleLyricsClick = () => {
    navigate("/detail");
  };

  return (
    <Background fadeOut={fadeOut}>
      <TopWrapper>
        <BackIcon />
      </TopWrapper>
      <Container>
        <AlbumArt src={currentSong.albumImg} alt="Album Art" fade={contentFade} />
        <SongTitle fade={contentFade}>{currentSong.title}</SongTitle>
        <Artist fade={contentFade}>{currentSong.artist}</Artist>
        <Lyrics fade={contentFade} onClick={handleLyricsClick}>
          {currentSong.lyrics.map((line, idx) => (
            <LyricsLine key={idx} isHighlight={idx === 1}>
              {line}
            </LyricsLine>
          ))}
        </Lyrics>
        <PlayBarWrapper>
          <MusicPlayBar
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            currentTime={currentTime}
            totalDuration={currentSong.duration}
          />
        </PlayBarWrapper>
      </Container>
      <Footer>
        <NavigateBar />
      </Footer>
    </Background>
  );
};

export default PlayMusic;
