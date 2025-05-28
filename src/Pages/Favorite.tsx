import styled from '@emotion/styled';
import PlayListThumbnail from '../Shared/PlayListTumbnaill/PlayListThumbnail.tsx';
import SongThumbnaill from '../Shared/SongTumbnaill/SongThumbnaill.tsx';
import background from '../assets/background.svg';
import { PlayListThumbnailData } from './dummy.tsx';
import { SongThumbnaillData } from './dummy.tsx';


const Favorite = () => {
  return (
    <div>
    <Root>
      {/* <NavigateBar/> */}
        <Title>PlayList</Title>
        <PlayListSection>
          {PlayListThumbnailData.map((data) => (
            <PlayListThumbnail title={data.title} songsCount={data.songsCount} time={data.time}/>
          ))}
        </PlayListSection>
      <Title>song</Title>
      <SongSection>
        {SongThumbnaillData.map((data) => (
          <SongThumbnaill img={data.img} title={data.title} artists={data.artists}/>
        ))}
      </SongSection>
    </Root>
    </div>
  );
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
    z-index: -1;
    padding: 8px 16px;
    overflow-x: scroll;
    
    
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

const PlayListSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 41px;
`

const SongSection = styled.div`
    
`

export default Favorite;