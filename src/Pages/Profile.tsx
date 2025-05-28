import styled from "@emotion/styled";
import Container from "../widgets/Profile/Container";
import HeadText from "../Shared/UI/HeadText";
import ProfileCard from "../widgets/Profile/ProfileCard";
import { background } from "../Shared/UI/common";
import EmotionHistory from "../widgets/Profile/EmotionHistory";
import HistoryCard from "../widgets/Profile/HistoryCard";
import { playlists } from "../Entites/Dummy";
import { useState } from "react";
import ButtonFunction from "../Shared/UI/Button";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
    ${background}
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 100px;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

const ShareModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ShareModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2A2A2A;
    border-radius: 16px;
    padding: 24px;
    width: 80%;
    max-width: 320px;
`;

const ShareTitle = styled.h3`
    color: white;
    font-size: 18px;
    margin-bottom: 16px;
    text-align: center;
`;

const ShareButton = styled.button`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    background: #67636D;
    color: white;
    cursor: pointer;
    transition: background 0.2s ease-out;
    &:hover {
        background: #7A7680;
    }
`;

const CloseButton = styled(ShareButton)`
    background: #4A4A4A;
    margin-top: 16px;
    &:hover {
        background: #5A5A5A;
    }
`;

const Profile = () => {
    const navigate = useNavigate();
    const [shareModal, setShareModal] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState<typeof playlists[0] | null>(null);

    const handleShare = (playlist: typeof playlists[0]) => {
        setSelectedPlaylist(playlist);
        setShareModal(true);
    };

    const handleCopyLink = () => {
        if (selectedPlaylist) {
            navigator.clipboard.writeText(`https://www.prote.com/playlist/${selectedPlaylist.id}`);
            alert("링크가 복사되었습니다.");
        }
    };

    const handleShareKakao = () => {
        // TODO: 카카오 공유 API 연동
        alert("카카오 공유 기능 준비 중입니다.");
    };

    const handleLogout = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <Background>
            <Container>
                <HeadText text="Profile" />
                <ProfileCard/>
                <ButtonFunction text="로그아웃" onClick={handleLogout} />
                <HeadText text="My Mood Lately" />
                <EmotionHistory />
                <HeadText text="History" />
                {playlists.map((playlist) => {
                    return (
                        <HistoryCard
                            key={playlist.id}
                            title={playlist.title}
                            image={playlist.image}
                            createdBy={playlist.createdBy}
                            onShare={() => handleShare(playlist)}
                        />
                    )
                })}
            </Container>
            {shareModal && (
                <ShareModal onClick={() => setShareModal(false)}>
                    <ShareModalContent onClick={e => e.stopPropagation()}>
                        <ShareTitle>공유하기</ShareTitle>
                        <ShareButton onClick={handleCopyLink}>
                            링크 복사하기
                        </ShareButton>
                        <ShareButton onClick={handleShareKakao}>
                            카카오톡으로 공유하기
                        </ShareButton>
                        <CloseButton onClick={() => setShareModal(false)}>
                            닫기
                        </CloseButton>
                    </ShareModalContent>
                </ShareModal>
            )}
        </Background>
    )
}

export default Profile;