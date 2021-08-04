const selectionButton=props=>{
    return <button style={props.active?{"color": "#39a2db"}:{}} className="selectionButton" onClick={props.click}>
                {props.children}
            </button>
}

export default selectionButton;