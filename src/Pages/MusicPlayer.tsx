import { useNavigate } from 'react-router-dom';
import album from '../assets/album.png';
import MusicPlayBar from '../Shared/MusicPlayBar';
import HeadText from '../Shared/UI/HeadText';
import backgroundImage from "../assets/songBG.png";
import styled from "@emotion/styled";
import Cancel from "../assets/취소.svg";

const BackgroundImage = styled.div`
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
    align-items: center;
    padding: 0 32px;
    margin-top: 44px;
    gap: 44px;
`;

const AlbumImage = styled.img`
    width: 236px;
    height: 238px;
    border-radius: 999px;
    animation: rotateAlbum 16s linear infinite;

    @keyframes rotateAlbum {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const SongName = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
`;

const SongMaker = styled.div`
    font-size: 14px;
    color: #fff;
    margin-top: 4px;
`;

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LyricsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    gap: 4px;
    margin-top: 4%;
`;

const LyricLine = styled.div<{ isHighlighted?: boolean }>`
    font-size: ${props => props.isHighlighted ? '16px' : '14px'};
    font-weight: ${props => props.isHighlighted ? '600' : '400'};
    color: ${props => props.isHighlighted ? '#fff' : '#ccc'};
`;

const lyrics = [
    { text: "How do I look? 내가 변했나구?" },
    { text: "티비를 틀어봐 I'm the woman on the moon" },
    { text: "네 머리 위로 사뿐사뿐 걸어 feel no gravity" },
];

const MusicPlayer = () => {
    const navigate = useNavigate();
    return (
        <BackgroundImage>
            <HeadText text="Music Player" img={Cancel} onClick={() => navigate('/')} />
            <Container>
                <TopContent>
                    <AlbumImage src={album} alt="album" />
                    <SongName>Bad News</SongName>
                    <SongMaker>kiss of life</SongMaker>
                </TopContent>
                <LyricsWrapper>
                    {lyrics.map((line, index) => (
                        <LyricLine
                            key={index}
                            isHighlighted={index === 1}
                            onClick={() => navigate('/music-detail')}
                        >
                            {line.text}
                        </LyricLine>
                    ))}
                </LyricsWrapper>
                <MusicPlayBar />
            </Container>
        </BackgroundImage>
    );
};

export default MusicPlayer; 