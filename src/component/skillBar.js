const skillBar=props=>{
    let percentString=props.percentage+"%";
    let style={"width": props.percentage+"%"};
    return (
        <div className="skillBar">
            <div className="skillBar__info">
                <div className="skillBar__name">{props.name}</div>
                <div className="skillBar__percentage">{percentString}</div>
            </div>
            <div className="skillBar__bar">
                <div className="skillBar__known" style={style}></div>
            </div>
        </div>
    );
}

export default skillBar;