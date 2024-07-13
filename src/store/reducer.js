// @ts-nocheck
const Inital_State = {
    toDoList:[]
};

export default function Reducer_Fun(state = Inital_State, action) {
    switch (action.type) {
        case "Add_ToDoList":
            Inital_State.toDoList=[action.payload,...Inital_State.toDoList];
            return {
                ...state,
                toDoList: [...(Inital_State.toDoList)]
            }
        case "SET_ToDoList":
            Inital_State.toDoList=action.payload;
            return {
                ...state,
                toDoList: Inital_State.toDoList
            }
        default:
            return state;
    }
}