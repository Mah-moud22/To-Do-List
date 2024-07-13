export function ToDoListChange(data){
    return{
        type: 'SET_ToDoList',
        payload: data,
    }
}
export function ToDoListAdd(data){
    return{
        type: 'Add_ToDoList',
        payload: data,
    }
}