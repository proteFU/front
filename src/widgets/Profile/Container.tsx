import styled from "@emotion/styled";

const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ProfileContainer;