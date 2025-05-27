import styled from "@emotion/styled";


export interface SongThumbnaillProps {
  img: string;
  title: string;
  artists: string;
}

const SongThumbnaill = ({img, title, artists} : SongThumbnaillProps) => {
  return (
    <Root>
      <Image src={img} alt={"이미지"}/>
      <div>
        <SongThumbnaillContent isTitle>{title}</SongThumbnaillContent>
        <SongThumbnaillContent>{artists}</SongThumbnaillContent>
      </div>
    </Root>
  )
}

const Root = styled.div`
    display: flex;
    gap: 12px;
    padding: 12px 0;
    align-items: center;
    align-self: stretch;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
`

const SongThumbnaillContent = styled.p<{ isTitle?: boolean }>`
    font-size: ${({ isTitle }) => (isTitle ? "20px" : "14px")};
    font-family: Pretendard;
    font-style: normal;
    font-weight: ${({ isTitle }) => (isTitle ? "700" : "400")};
    color: ${({ isTitle }) => (isTitle ? "#FFF" : "rgba(255, 255, 255, 0.40)")};
`


export default SongThumbnaill;