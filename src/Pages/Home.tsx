import styled from '@emotion/styled';
import HeadText from '../Shared/UI/HeadText';
import { useEffect, useState } from 'react';
import { background } from '../Shared/UI/common';
import { playlists } from '../Entites/Dummy';
import api from '../api/axios';

const Background = styled.div`
  ${background}
`;

const Container = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 0 0 auto;
`;

const SongImage = styled.img`
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: #FFF;
`;

const SongInfoContainer = styled.div`
  display: flex;
  padding: 2px 0px;
  flex-direction: column;
  align-items: flex-start;
`;

const SongTitle = styled.div`
  align-self: stretch;
  color: #FFF;
text-align: center;

  /* p3 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SongArtist = styled.div`
  align-self: stretch;
  color: rgba(255, 255, 255, 0.40);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Home = () => {
  const [userProfileImage, setUserProfileImage] = useState<string>("");

  const getRecommendPlaylist = async () => {
    try {
      const response = await api.get("/playlist/recommend");
      console.log('추천 플레이리스트:', response.data);
    } catch (error) {
      console.error('추천 플레이리스트 조회 실패:', error);
    }
  }

  const getRecommendMusic = async () => {
    try {
      const response = await api.get("/music/recommend");
      console.log('추천 음악:', response.data);
    } catch (error) {
      console.error('추천 음악 조회 실패:', error);
    }
  }

  const getUserProfileImage = async () => {
    try {
      const response = await api.get("/users/profile");
      console.log('프로필 정보:', response.data);
      setUserProfileImage(response.data.profileImageUrl);
    } catch (error) {
      console.error('프로필 정보 조회 실패:', error);
    }
  }

  useEffect(() => {
    getRecommendPlaylist();
    getRecommendMusic();
    getUserProfileImage();
  }, []);

  return (
    <Background>
      <HeadText text="Home" img={userProfileImage} />
      <Container>
      <HeadText text="Recommend Songs" fontSize="28px" />
        <InnerContainer>
          {playlists.map((playlist) => (
            <SongContainer>
              <SongImage src={playlist.image} />
              <SongInfoContainer>
                <SongTitle>{playlist.title}</SongTitle>
                <SongArtist>{playlist.artist}</SongArtist>
              </SongInfoContainer>
            </SongContainer>
          ))}
        </InnerContainer>
        <HeadText text="Recommend Playlists" fontSize="28px" />
        <InnerContainer>
          {playlists.map((playlist) => (
            <SongContainer>
              <SongImage src={playlist.image} />
              <SongInfoContainer>
                <SongTitle>{playlist.title}</SongTitle>
                <SongArtist>{playlist.artist}</SongArtist>
              </SongInfoContainer>
            </SongContainer>
          ))}
        </InnerContainer>
      </Container>
    </Background>
  );
};

export default Home; 