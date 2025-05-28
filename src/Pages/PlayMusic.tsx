import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import album from "../assets/album.png";
import MusicPlayBar from "../shared/ui/MusicPlayBar";
import BackIcon from "../shared/ui/BackIcon";
import "../App/App.css";
import NavigateBar from "../shared/ui/NavigateBar";

const Background = styled.div`
    width: 100%;
    height: 852px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    overflow: hidden;
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

const AlbumArt = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: cover;
    animation: spin 6s linear infinite;
    margin-top: 30px;

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

const SongTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    text-align: center;
`;

const Artist = styled.div`
    font-size: 14px;
    opacity: 0.7;
    margin-top: 4px;
    text-align: center;
`;

const Lyrics = styled.div`
    text-align: center;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 24px;
    cursor: pointer;
`;

const LyricsLine = styled.p<{ isHighlight?: boolean }>`
    margin: 4px 0;
    font-weight: ${({ isHighlight }) => (isHighlight ? 600 : 400)};
    font-size: ${({ isHighlight }) => (isHighlight ? '16px' : '14px')};
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

const PlayMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const totalDuration = 190;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentTime(prev => {
                if (prev >= totalDuration) {
                    clearInterval(interval);
                    return totalDuration;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isPlaying, totalDuration]);

    const handlePlayPause = (play: boolean) => {
        setIsPlaying(play);
    };

    const handleLyricsClick = () => {
        navigate("/detail");
    };

    return (
        <Background>
            <TopWrapper>
                <BackIcon />
            </TopWrapper>
            <Container>
                <AlbumArt src={album} alt="Album Art" />
                <SongTitle>Bad News</SongTitle>
                <Artist>kiss of life</Artist>
                <Lyrics onClick={handleLyricsClick}>
                    <LyricsLine>How do I look? 내가 변했나구?</LyricsLine>
                    <LyricsLine isHighlight>티비를 틀어봐 I'm the woman on the moon</LyricsLine>
                    <LyricsLine>네 머리 위로 사뿐사뿐 걸어 feel no gravity</LyricsLine>
                </Lyrics>
                <PlayBarWrapper>
                    <MusicPlayBar
                        isPlaying={isPlaying}
                        onPlayPause={handlePlayPause}
                        currentTime={currentTime}
                        totalDuration={totalDuration}
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
