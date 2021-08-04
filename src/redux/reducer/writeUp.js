const writeUp=(state={},action)=>{
    
    switch (action.type) {
        case "writeUp":
            return {...action.data};
        default:
            return state;
    }
}

export default writeUp;