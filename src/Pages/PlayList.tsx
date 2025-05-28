import styled from "@emotion/styled";
import background from '../assets/background.svg';
import PlatIcon from "../assets/PlayIcon.svg";
import SongThumbnaill from "../Shared/SongTumbnaill/SongThumbnaill.tsx";
import { SongThumbnaillData } from './dummy.tsx';

export interface PlayListInfoProps {
  playlistTitle: string;
  playlistTime: string;
  playlistSongsCount: number;
  playlistImage: string;
}

const PlayList = ({playlistImage, playlistTitle, playlistTime, playlistSongsCount} : PlayListInfoProps) => {
  return (
    <Root>
      <PlayListInfo>
        <Image src={playlistImage} alt={"이미지"}/>
        <Styleddiv>
          <div>
            <PlayListInfoContent isTitle>{playlistTitle}</PlayListInfoContent>
            <PlayListInfoContent>{playlistSongsCount} Songs · {playlistTime}</PlayListInfoContent>
          </div>
          <StyledButton>
            <IconImage src={PlatIcon}/>
            <ButtonContent>Play</ButtonContent>
          </StyledButton>
        </Styleddiv>
      </PlayListInfo>
      <Title>song</Title>
      {SongThumbnaillData.map((data) => (
        <SongThumbnaill img={data.img} title={data.title} artists={data.artists}/>
      ))}
      <div style={{height: "60px"}}/>
    </Root>
  )
}

const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 8px 16px 8px 16px;
    overflow-x: scroll;
`

const PlayListInfo = styled.div`
    padding: 32px 0;
    display: flex;
    gap:20px;
`

const Image = styled.img`
    width: 160px;
    height: 160px;
`

const PlayListInfoContent = styled.p<{ isTitle?: boolean }>`
    font-size: ${({ isTitle }) => (isTitle ? "24px" : "12px")};
    font-family: Pretendard;
    font-style: normal;
    font-weight: ${({ isTitle }) => (isTitle ? "700" : "400")};
    color: ${({ isTitle }) => (isTitle ? "#FFF" : "rgba(255, 255, 255, 0.40)")};
`

const StyledButton = styled.button`
    padding: 4px 16px;
    border-radius: 4px;
    background:#7D2EEE;
    display: flex;
    align-items: center;
    border: none;
    
`

const IconImage = styled.img`
    width: 24px;
    height: 24px;
`
const ButtonContent =styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Styleddiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
`

const Title = styled.p`
    color: #FFF;
    font-family: Pretendard,serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 0 8px 0;
`

export default PlayList;