import album from "../assets/album.png";
import MusicPlayBar from '../Shared/MusicPlayBar';
import heart from "../assets/heart.png";
import HeadText from '../Shared/UI/HeadText';
import styled from "@emotion/styled";
import backgroundImage from "../assets/songBG.png";
import { useNavigate } from "react-router-dom";
import Down from "../assets/최소화.svg";
import { useState, useEffect } from "react";

const lyrics = {
    "00:00.000" : "How do I look? 내가 변했나구?",
    "00:03.000" : "티비를 틀어봐 I'm the woman on the moon",
    "00:06.000" : "네 머리 위로 사뿐사뿐 걸어 feel no gravity",
    "00:09.000" : "우린 어떤 때보다도 ain't no diggity",
    "00:12.000" : "What goes around, some comes around",
    "00:15.000" : "안 들려, 몰라",
    "00:18.000" : "Look at me now 느낌이 와, 다르지 너와",
    "00:21.000" : "I'm your wannabe 입 밖으론 못 뱉지",
    "00:24.000" : "Uh-oh, can't you see? Can't you see?",
    "00:27.000" : "Runnin', runnin', runnin', runnin'",
    "00:30.000" : "Something's comin', comin', comin' (ah)"
};

function MusicDetail() {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState("00:00.000");
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    
    useEffect(() => {
        if (!isPlaying) return; // 재생 중이 아니면 타이머 중지
        
        const timeEntries = Object.keys(lyrics);
        const interval = setInterval(() => {
            setCurrentTime(prevTime => {
                const [minutes, seconds] = prevTime.split(':');
                const [sec, ms] = seconds.split('.');
                let newMs = parseInt(ms) + 100;
                let newSec = parseInt(sec);
                let newMin = parseInt(minutes);
                
                if (newMs >= 1000) {
                    newMs = 0;
                    newSec += 1;
                }
                if (newSec >= 60) {
                    newSec = 0;
                    newMin += 1;
                }
                
                const newTime = `${String(newMin).padStart(2, '0')}:${String(newSec).padStart(2, '0')}.${String(newMs).padStart(3, '0')}`;
                
                // 현재 시간에 맞는 가사 인덱스 찾기
                const nextIndex = timeEntries.findIndex(time => time > newTime);
                if (nextIndex !== -1) {
                    setCurrentLyricIndex(nextIndex - 1);
                }
                
                return newTime;
            });
        }, 100);
        
        return () => clearInterval(interval);
    }, [isPlaying]); // isPlaying이 변경될 때마다 useEffect 재실행
    
    return (
        <Background>
            <HeadText text="Music Detail" img={Down} onClick={() => navigate(-1)} />
            <Container>
                <TopSection>
                    <AlbumImage src={album} alt="album" isPlaying={isPlaying} />
                    <TextContainer>
                        <SongName>Bad News</SongName>
                        <ArtistName>kiss of life</ArtistName>
                    </TextContainer>
                    <HeartIcon src={heart} alt="heart" />
                </TopSection>
                <LyricsSection>
                    {Object.entries(lyrics).map(([time, line], idx) => (
                        <LyricLine
                            key={idx}
                            isFocused={idx === currentLyricIndex}
                            time={time}
                        >
                            {line}
                        </LyricLine>
                    ))}
                </LyricsSection>
                <MusicPlayBar isPlaying={isPlaying} onPlayStateChange={setIsPlaying} />
            </Container>
        </Background>
    );
}

const Background = styled.div`
    background: url(${backgroundImage}) no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    margin-top: 44px;
    gap: 44px;
    color: white;
`;

const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`;

const AlbumImage = styled.img<{ isPlaying: boolean }>`
    width: 94px;
    height: 94px;
    border-radius: 999px;
    animation: ${props => props.isPlaying ? 'rotateAlbum 20s linear infinite' : 'none'};

    @keyframes rotateAlbum {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const HeartIcon = styled.img`
    width: 24px;
    cursor: pointer;
    transition: transform 0.2s ease-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const SongName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
`;

const ArtistName = styled.div`
    font-size: 14px;
    color: #fff;
`;

const LyricsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 16px;
`;

const LyricLine = styled.div<{ isFocused?: boolean; time?: string }>`
    font-size: ${props => props.isFocused ? '24px' : '20px'};
    color: ${props => props.isFocused ? '#fff' : '#ccc'};
    font-weight: ${props => props.isFocused ? '600' : '400'};
    text-align: left;
    transition: all 0.3s ease-out;
    &:hover {
        transform: scale(1.02);
    }
`;

export default MusicDetail;
