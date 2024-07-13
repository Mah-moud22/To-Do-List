// @ts-nocheck
import React, { useEffect, useState } from 'react'
import styles from './to_do_list.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {ToDoListChange} from '../store/action'

function ToDoListItem(props) {
  const [isFinished, setIsFinished] = useState(false);
  const toDoList = useSelector((state)=> state.toDoList);
  const dispatch = useDispatch();

  useEffect(()=>{
    setIsFinished(props.content[1])
  },[props])

  const changeStateHandler = (changeElement)=>{
    toDoList.map((element) => {
        if(element.item === changeElement[0]){
            element['finished'] =! changeElement[1];
            setIsFinished(!isFinished)
            return element;
        }
        return element;
    })
    
    dispatch(ToDoListChange(toDoList));
    
  }

  return (

    <div className={`list-group-item ${isFinished?styles.checked:''}`}>
      <input type="checkbox" style={{position: 'absolute', left:'10px',top:'0', height:'100%', width:'25px'}} checked={isFinished} onChange={(e)=>changeStateHandler(props.content)} />
      <span>{props.content[0]}</span>
      <button className='btn-close' style={{position: 'absolute', right:'10px'}} onClick={()=>props.remover(props.content[0],isFinished)}></button>
      
    </div>
  )
  
}

export default ToDoListItem
