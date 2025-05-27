import styled from "@emotion/styled";
import ShareIcon from '../../assets/공유.svg';
import HamburgerIcon from '../../assets/햄버거.svg';
import type { HistoryCardProps } from "../../types/Profile/HistoryCardProps";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 0 16px;
    margin-bottom: 16px;
    position: relative;
`;

const HistoryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
`;

const ImageContainer = styled.img`
    width: 56px;
    height: 56px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

const TitleText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
`;

const SubText = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-family: "Pretendard";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const MenuModal = styled.div`
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

const MenuContent = styled.div`
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

const MenuTitle = styled.h3`
    color: white;
    font-size: 18px;
    margin-bottom: 16px;
    text-align: center;
`;

const MenuButton = styled.button`
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

const CloseButton = styled(MenuButton)`
    background: #4A4A4A;
    margin-top: 16px;
    &:hover {
        background: #5A5A5A;
    }
`;

const HistoryCard = ({ title, image, createdBy, onShare }: HistoryCardProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [playlistData, setPlaylistData] = useState<any>(null);

    const getPlaylistHistory = async () => {
        try {
            const response = await axios.get('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/songs/likes');
            setPlaylistData(response.data);
        } catch (error) {
            console.error("플레이리스트 히스토리 조회 실패", error);
        }
    };

    useEffect(() => {
        getPlaylistHistory();
    }, []);

    const handleDelete = () => {
        // TODO: 삭제 API 연동
        alert("delete function is under development.");
        setIsMenuOpen(false);
    };

    const handleEdit = () => {
        // TODO: 수정 페이지로 이동
        alert("edit function is under development.");
        setIsMenuOpen(false);
    };

    return (
        <Container>
            <HistoryContainer>
                <ImageContainer src={playlistData?.image || image} />
                <TextContainer>
                    <TitleText>{playlistData?.title || title}</TitleText>
                    <SubText>{playlistData?.createdBy || createdBy}</SubText>
                </TextContainer>
            </HistoryContainer>
            <IconContainer>
                <img src={ShareIcon} onClick={onShare} />
                <img src={HamburgerIcon} onClick={() => setIsMenuOpen(true)} />
            </IconContainer>
            {isMenuOpen && (
                <MenuModal onClick={() => setIsMenuOpen(false)}>
                    <MenuContent onClick={e => e.stopPropagation()}>
                        <MenuTitle>메뉴</MenuTitle>
                        <MenuButton onClick={handleEdit}>
                            수정하기
                        </MenuButton>
                        <MenuButton onClick={handleDelete}>
                            삭제하기
                        </MenuButton>
                        <CloseButton onClick={() => setIsMenuOpen(false)}>
                            닫기
                        </CloseButton>
                    </MenuContent>
                </MenuModal>
            )}
        </Container>
    )
}

export default HistoryCard;