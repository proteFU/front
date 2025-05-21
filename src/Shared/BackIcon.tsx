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
    top: 0;
    left: 0;
    width: 24px;
`;

export default BackIcon;