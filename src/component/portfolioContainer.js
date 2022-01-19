import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { imageUrl, writeUp } from "../redux/action/index";

const PortfolioContainer = (props) => {
    let dispatchImage = useDispatch();
    let dispatchWrite = useDispatch();
    const dispatchFunction = () => {
        dispatchImage(imageUrl(props.imageUrl));
        dispatchWrite(writeUp(props.writeUp));
    };

    let isWeb = props.className === "portfolio__web";
    let portfolioExtra = isWeb ? (
        <div className="portfolio__extra" style={{ height: "20%" }}>
            <Link
                to="/portfolio-detail"
                className="portfolio__extra--1"
                onClick={dispatchFunction}
            >
                more
            </Link>
            <a
                href={props.writeUp.link}
                className="portfolio__extra--2"
                target="_blank"
                rel="noreferrer"
            >
                link
            </a>
        </div>
    ) : (
        <div className="portfolio__extra">
            <Link
                to="/portfolio-detail"
                className="portfolio__extra--1"
                style={{ width: "100%" }}
                onClick={dispatchFunction}
            >
                more
            </Link>
        </div>
    );

    let style = { display: "block" };
    if (props.display.all) {
        style = { display: "block" };
    } else if (props.display.mobile) {
        if (isWeb) {
            style = { display: "none" };
        } else {
            style = { display: "block" };
        }
    } else if (props.display.web) {
        if (isWeb) {
            style = { display: "block" };
        } else {
            style = { display: "none" };
        }
    }

    return (
        <figure
            data-aos={"fade-left"}
            className={props.className}
            style={style}
        >
            <img className="portfolio__img" src={props.src} alt={props.alt} />
            {portfolioExtra}
        </figure>
    );
};

export default PortfolioContainer;
