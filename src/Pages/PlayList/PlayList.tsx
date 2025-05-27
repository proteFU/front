import styled from "@emotion/styled";
import MainBackgroundImage from '../../assets/proteBackground2.png';
import dummyThumbnail from "../../assets/dummyThumbnail.png";
import PlatIcon from "../../assets/PlayIcon.svg";
import SongThumbnaill from "../../Shared/SongTumbnaill/SongThumbnaill.tsx";
import NavigateBar from "../../Shared/NavigateBar.tsx";
import { SongThumbnaillData } from '../dummy.tsx';

const PlayList = () => {
  return (
    <Root>
      <PlayListInfo>
        <Image src={dummyThumbnail} alt={"이미지"}/>
        <Styleddiv>
          <div>
            <PlayListInfoContent isTitle>노래 제목</PlayListInfoContent>
            <PlayListInfoContent>23 Songs · 2h 34m</PlayListInfoContent>
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
      <NavigateBar/>
    </Root>
  )
}

const Root = styled.div`
    width: 361px;
    height: 798px;
    background-image: url(${MainBackgroundImage});
    background-color: #292929;
    padding: 54px 16px 0;
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

const Title = styled.h1`
    color: #FFF;
    font-family: Pretendard,serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 0 8px 0;
`

export default PlayList;