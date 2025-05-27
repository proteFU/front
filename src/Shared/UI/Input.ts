import styled from "@emotion/styled";

const HiddenInput = styled.input`
    display: none;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
    gap: 28px;
    align-self: stretch;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

const InputLabel = styled.p`
    align-self: stretch;
    color: #FFF;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const StyledInput = styled.input`
    display: flex;
    padding: 12px 12px;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: #5C5E76;
    color: #BDBDBD;
    transition: all 0.3s ease-out;
    &:focus {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export { HiddenInput, InputContainer, InnerContainer, InputLabel, StyledInput };