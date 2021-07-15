const selectionButton=props=>{
    return <button className="selectionButton" onClick={props.click}>
                {props.children}
            </button>
}

export default selectionButton;