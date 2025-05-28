import styled from "@emotion/styled";
import HomeIcon from "../../assets/HomeIcon.svg"

const NavigateBar = () => {
    return (
        <Root>
        <div>
        <IconsDiv>
            <Icon>
            <IconImage src={HomeIcon} />
            <IconContent>Home</IconContent>
            </Icon>
            <Icon>
            <IconImage src={HomeIcon} />
            <IconContent>Home</IconContent>
            </Icon>
            <Icon>
            <IconImage src={HomeIcon} />
            <IconContent>Home</IconContent>
            </Icon>
            <Icon>
            <IconImage src={HomeIcon} />
            <IconContent>Home</IconContent>
            </Icon>
        </IconsDiv>
        </div>
        </Root>
    )
}

const Root = styled.div`
    height: 64px;
    padding-top: 12px;
    position: absolute;
    bottom: 0;
    background: rgba(204, 204, 204, 0.50);


`

const IconsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 393px;
    padding: 0 16px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IconImage = styled.img`
    width: 24px;
    height: 24px;
`

const IconContent = styled.p`
    font-size: 20px;
    font-family: SF Pro;
    font-style: normal;
    font-weight: 400;
    color: #F2EAFD;
`

export default NavigateBar;