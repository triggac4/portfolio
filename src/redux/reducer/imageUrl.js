const imageUrl=(state=[],action)=>{
    
    switch(action.type){
        case "imageUrl":
            return action.data;
        default:
            return state;
    }
}

export default imageUrl;