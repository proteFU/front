import styled from "@emotion/styled";

interface HeadTextProps {
    text: string;
    img?: string;
    onClick?: () => void;
}

const Text = styled.h1`
    font-family: 'Pretendard';
    color: #FFFFFF;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Image = styled.img`
    cursor: pointer;
    &:active {
        opacity: 0.5;
    }
`;

const TextBox = styled.div`
    display: flex;
    width: 100%;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
`;

const HeadText = ({ text, img, onClick }: HeadTextProps) => {
    return (
        <TextBox>
            <Text> {text} </Text>
            {img && <Image src={img} alt={`${text} 이미지`} onClick={onClick} />}
        </TextBox>
    )
}

export default HeadText;