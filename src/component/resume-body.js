const resumeBody = (props) => {
    let heading = props.heading == null ? { rowGap: 0 } : {};
    return (
        <div data-aos={"fade-left"} className="resume__body" style={heading}>
            <h3 className="heading__3 resume__body--heading">
                {props.heading}
            </h3>
            <div className="resume__body--side-marker">
                <div className="circle"></div>
                <div className="long-line"></div>
            </div>
            <div className="resume__body--element">{props.children}</div>
        </div>
    );
};

export default resumeBody;
