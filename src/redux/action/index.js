export const imageUrl=(urlList)=>{
    return {
        type:"imageUrl",
        data: urlList
    }
}

export const writeUp=(writeUpObject)=>{
    return {
        type:"writeUp",
        data: writeUpObject
    }
}