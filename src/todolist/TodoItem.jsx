/* eslint-disable react/prop-types */
import { useState } from "react"
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo, findTitleById}) => {
  const [color,setcolor] = useState (['black'])
  const [underlined,setunderlined] = useState([])

  const clickcolor = () => {
    setcolor('blue')
    setunderlined('underline')
  }
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-titl" style={{color: color, textDecoration: underlined}}>{title}</p>
      <div>
      <button className="todo-check-btn" onClick={clickcolor}>&#x2713;</button>  
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
    </div>
  )
}