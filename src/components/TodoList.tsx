import { useState } from "react";
import DeleteButton from "./DeleteButton"

const TodoList = () => {

  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "Buy Groceries",
        isCompleted: false
      },
      {
        id: 2,
        text: "Walk The Dog",
        isCompleted: true
      },
      {
        id: 3,
        text: "Do Laundries",
        isCompleted: false
      },
      {
        id: 4,
        text: "Study For Exams",
        isCompleted: true
      }
    ]
  )

  const totalNoofTodos = todos.length;



  return (
    <ul>
      {
        todos.map(todo => (
          <li
            key={todo.id} className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
            onClick={() => {
              setTodos(todos.map(t => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted }
                }
                return t;

              }))
            }}

          >
            <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span> {" "}
            <DeleteButton id={todo.id} setTodos={setTodos} />


          </li>
        ))
      }


    </ul>
  )
}

export default TodoList
