import styled from "@emotion/styled";
import Container from "../widgets/Profile/Container";
import HeadText from "../shared/ui/HeadText";
import ProfileCard from "../widgets/Profile/ProfileCard";
import { background } from "../shared/ui/common";
import EmotionHistory from "../widgets/Profile/EmotionHistory";
import HistoryCard from "../widgets/Profile/HistoryCard";
import { playlists } from "../Entites/Dummy";
import { useState } from "react";

const Background = styled.div`
    ${background}
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

    return (
        <Background>
            <Container>
                <HeadText text="Profile" />
                <ProfileCard/>
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