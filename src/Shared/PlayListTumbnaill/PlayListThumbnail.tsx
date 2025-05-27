import styled from '@emotion/styled';
import dummyThumbnail from '../../assets/dummyThumbnail.png';


export interface PlayListThumbnailProps {
  title: string;
  songsCount: number;
  time: string;
}


const PlayListThumbnail = ({title, songsCount, time} : PlayListThumbnailProps) => {
  return (
    <Root>
      <Image src={dummyThumbnail} alt={"이미지"}/>
      <div>
        <PlayListThumbnailContent isTitle>{title}</PlayListThumbnailContent>
        <PlayListThumbnailContent>{songsCount} Songs · {time}</PlayListThumbnailContent>
      </div>
    </Root>
  )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0;
    
`

const Image = styled.img`
    width: 160px;
    height: 160px;
`


const PlayListThumbnailContent = styled.p<{ isTitle?: boolean }>`
    font-size: ${({ isTitle }) => (isTitle ? "18px" : "12px")};
    font-family: Pretendard;
    font-style: normal;
    font-weight: ${({ isTitle }) => (isTitle ? "700" : "400")};
    color: ${({ isTitle }) => (isTitle ? "#FFF" : "rgba(255, 255, 255, 0.40)")};
`

export default PlayListThumbnail;