// @ts-nocheck
import React, { useState } from 'react'
import ToDoListItem from './ToDoListItem.tsx'
import { useDispatch, useSelector } from 'react-redux';
import { ToDoListAdd, ToDoListChange } from '../store/action'
function ToDoList() {
    const toDoList = useSelector((state) => state.toDoList);
    const dispatch = useDispatch();
    const [toDoItem, setToDoItem] = useState("");

    const addToListHandler = (e) => {
        if ((e.type === 'keyup' && e.code === 'Enter')) {
            if (toDoItem.length !== 0) {
                dispatch(ToDoListAdd({ item: toDoItem, finished: false }));
                setToDoItem("");
            }
        }
    }
    const changeHandler = (e) => {
        setToDoItem(e.target.value);
    }

    const removeHandler= (removedItem, status)=>{
        let newItems = toDoList.filter((ele)=>ele.item !== removedItem)
        dispatch(ToDoListChange(newItems));
    }
    return (
        <div>
            <h1 className='h1 py-3 text-decoration-underline'>To Do List Task</h1>
            <div className="container">
                <input type="text" className='form-control mt-5' value={toDoItem} onChange={changeHandler} onKeyUpCapture={addToListHandler} />
                {(toDoList.length > 0)?(<div className='list-group mt-5'>
                    {toDoList.map((element, index) => <ToDoListItem key={index} content={[element.item, element.finished]} remover={removeHandler}/>)}
                </div>): <h3 className='mt-5'>No Items In The List</h3>}
            </div>

        </div>
    )
}

export default ToDoList
