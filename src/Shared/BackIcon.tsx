import arrow from "../assets/arrow.png";
import { css } from "@emotion/css";

function BackIcon() {
    return(
        <>
            <img src={arrow} alt="arrow" className={arrowStyle} />
        </>
    );
}

const arrowStyle = css`
    position: absolute;
    width: 24px;
    align-items: center;
    justify-content: center;
`;

export default BackIcon;