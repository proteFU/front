import album from "../assets/album.png";
import MusicPlayBar from '../shared/MusicPlayBar';
import heart from "../assets/heart.png";
import HeadText from '../shared/ui/HeadText';
import styled from "@emotion/styled";
import backgroundImage from "../assets/songBG.png";
import { useNavigate } from "react-router-dom";
import Down from "../assets/최소화.svg";

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

function MusicDetail() {
    const navigate = useNavigate();
    
    return (
        <Background>
            <HeadText text="Music Detail" img={Down} onClick={() => navigate(-1)} />
            <Container>
                <TopSection>
                    <AlbumImage src={album} alt="album" />
                    <TextContainer>
                        <SongName>Bad News</SongName>
                        <ArtistName>kiss of life</ArtistName>
                    </TextContainer>
                    <HeartIcon src={heart} alt="heart" />
                </TopSection>
                <LyricsSection>
                    {lyrics.map((line, idx) => (
                        <LyricLine
                            key={idx}
                            isFocused={idx === 1}
                        >
                            {line}
                        </LyricLine>
                    ))}
                </LyricsSection>
                <MusicPlayBar />
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

const AlbumImage = styled.img`
    width: 94px;
    height: 94px;
    border-radius: 999px;
    animation: rotateAlbum 20s linear infinite;

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

const LyricLine = styled.div<{ isFocused?: boolean }>`
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
