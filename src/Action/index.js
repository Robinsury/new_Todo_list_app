export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodd =(id)=>{
    return{
        type:"DELETE_TODO",
        id
    }
}
export const removeTodd=()=>{
    return{
        type:"REMOVE_TODO"
    }
}
export const errors=()=>{
    return{
        type:"errors"
    }
};