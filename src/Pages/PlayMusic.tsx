import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import album1 from "../assets/album.svg";
import album2 from "../assets/album2.svg";
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
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 140px;
  overflow: hidden;
  margin-top: 24px;
  cursor: pointer;
  transition: opacity 0.6s ease;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const LyricsInner = styled.div<{ translateY: number }>`
  transition: transform 0.6s ease;
  transform: translateY(${({ translateY }) => translateY}px);
`;

const LyricsLine = styled.p<{ isHighlight?: boolean }>`
  margin: 4px 0;
  font-weight: ${({ isHighlight }) => (isHighlight ? 700 : 400)};
  font-size: ${({ isHighlight }) => (isHighlight ? "16px" : "14px")};
  opacity: ${({ isHighlight }) => (isHighlight ? 1 : 0.5)};
  color: ${({ isHighlight }) => (isHighlight ? "#fff" : "white")};
  animation: ${({ isHighlight }) => (isHighlight ? "pulse 1.2s infinite" : "none")};
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

interface LyricLine {
  text: string;
  start: number; // 가사 시작 시간(초)
}

interface Song {
  title: string;
  artist: string;
  lyrics: LyricLine[];
  albumImg: string;
  duration: number; 
  src: string;
}

const songs: Song[] = [
  {
    title: "Bad News",
    artist: "kiss of life",
    albumImg: album1,
    duration: 190,
    lyrics: [
      { text: "(간주중)", start: 0 },
      { text: "How do I look? 내가 변했나구?", start: 0 },
      { text: "티비를 틀어봐 I'm the woman on the moon", start: 5 },
      { text: "네 머리 위로 사뿐사뿐 걸어 feel no gravity", start: 10 },
      { text: "끝나지 않는 이야기 속으로", start: 15 },
      { text: "숨 가쁜 달빛 아래 dance with me", start: 20 },
      { text: "밤새도록 멈추지 않는 우리만의 무대", start: 25 },
      { text: "Bad News - 들어볼래?", start: 30 },
    ],
    src: "BadNews.mp3",
  },
  {
    title: "Cold feet",
    artist: "Toyo Sound",
    albumImg: album2,
    duration: 200,
    lyrics: [
      { text: "That's what I like about her", start: 0 },
      { text: "I think that she knows my name", start: 4 },
      { text: "I think I love her then who's to say?", start: 8 },
    ],
    src: "Coldfeet.mp3",
  },
];

const PlayMusic = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const [fadeOut, setFadeOut] = useState(false);
  const [contentFade, setContentFade] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  const currentSong = songs[currentSongIndex];


  const lineHeight = 28; 

  const translateY = -Math.max(highlightIndex - 1, 0) * lineHeight;

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current?.pause();
      return;
    }
    audioRef.current?.play();

    const interval = setInterval(() => {
      if (!audioRef.current) return;

      const current = audioRef.current.currentTime;
      setCurrentTime(current);

      let newIndex = 0;
      for (let i = 0; i < currentSong.lyrics.length; i++) {
        if (current >= currentSong.lyrics[i].start) {
          newIndex = i;
        } else {
          break;
        }
      }
      setHighlightIndex(newIndex);

      if (current >= currentSong.duration) {
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
          setIsPlaying(true);
        }, 800);
      }
    }, 300);

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
        <audio ref={audioRef} src={currentSong.src} preload="auto" />
        <AlbumArt src={currentSong.albumImg} alt="Album Art" fade={contentFade} />
        <SongTitle fade={contentFade}>{currentSong.title}</SongTitle>
        <Artist fade={contentFade}>{currentSong.artist}</Artist>
        <Lyrics fade={contentFade} onClick={handleLyricsClick}>
          <LyricsInner translateY={translateY}>
            {currentSong.lyrics.map((line, idx) => (
              <LyricsLine key={idx} isHighlight={idx === highlightIndex}>
                {line.text}
              </LyricsLine>
            ))}
          </LyricsInner>
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
