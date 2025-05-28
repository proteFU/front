import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import album from "../assets/album.png";
import heartIcon from "../assets/heart.svg";
import MusicPlayBar from "../shared/ui/MusicPlayBar";
import "../App/App.css";
import BackIcon from "../shared/ui/BackIcon";
import NavigateBar from "../shared/ui/NavigateBar";

const Background = styled.div`
    width: 100%;
    max-height: 852px;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 361px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 4px;
    color: white;
    position: relative;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
    margin-bottom: 12px;
    overflow-y: auto;
`;

const AlbumContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
`;

const AlbumImageContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const AlbumArt = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 99px;
    object-fit: cover;
    animation: spin 4s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const SongInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Artist = styled.div`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
`;

interface LikeButtonProps {
    isLiked: boolean;
}

const LikeButton = styled.button<LikeButtonProps>`
    background: none;
    border: none;
    left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        height: 24px;
        opacity: ${props => (props.isLiked ? 1 : 0.6)};
    }
`;

const LyricsContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 4px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const LyricLine = styled.div<{ isHighlight?: boolean }>`
    font-size: ${props => (props.isHighlight ? '24px' : '20px')};
    line-height: 1.6;
    margin-bottom: 8px;
    color: ${props => (props.isHighlight ? '#FFF' : 'rgba(255, 255, 255, 0.5)')};
    font-weight: ${props => (props.isHighlight ? '500' : 'normal')};
`;

const PlayBarWrapper = styled.div`
    width: 100%;
    padding-bottom: 64px;
`;

const Footer = styled.div`
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
    z-index: 100;
    position: absolute;
    bottom: 0;
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
    "Something's comin', comin', comin'"
];

const MusicDetail = () => {
    const [isLiked, setIsLiked] = useState(false);
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
    }, [isPlaying, totalDuration]);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const handlePlayPause = (playing: boolean) => {
        setIsPlaying(playing);
    };

    return (
        <Background>
            <Container>
                <BackIcon />
                <MainContent>
                    <AlbumContainer>
                        <AlbumImageContainer>
                            <AlbumArt 
                                src={album} 
                                alt="Bad News"
                            />
                        </AlbumImageContainer>
                        <SongInfoContainer>
                            <Title>Bad News</Title>
                            <Artist>kiss of life</Artist>
                        </SongInfoContainer>
                        <LikeButton onClick={toggleLike} isLiked={isLiked}>
                            <img src={heartIcon} alt="Like" />
                        </LikeButton>
                    </AlbumContainer>
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
                    <PlayBarWrapper>
                        <MusicPlayBar 
                            isPlaying={isPlaying}
                            onPlayPause={handlePlayPause}
                            currentTime={currentTime}
                            totalDuration={totalDuration}
                        />
                    </PlayBarWrapper>
                </MainContent>
                <Footer>
                    <NavigateBar />
                </Footer>
            </Container>
        </Background>
    );
};

export default MusicDetail;
