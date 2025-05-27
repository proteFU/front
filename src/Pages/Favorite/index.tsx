import styled from '@emotion/styled';
import PlayListThumbnail from '../../Shared/PlayListTumbnaill/PlayListThumbnail.tsx';
import SongThumbnaill from '../../Shared/SongTumbnaill/SongThumbnaill.tsx';
// import NavigateBar from './NavigateBar';
import MainBackgroundImage from '../../assets/proteBackground2.png';
import { PlayListThumbnailData } from '../dummy.tsx';
import { SongThumbnaillData } from '../dummy.tsx';


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
    width: 361px;
    height: 798px;
    background-image: url(${MainBackgroundImage});
    background-color: #292929;
    padding: 54px 16px 0px;
    overflow-x: scroll;
    position: relative;
    
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
    justify-content: space-between;
`

const SongSection = styled.div`
    
`

export default Favorite;