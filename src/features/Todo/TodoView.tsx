import { AddTodo, EditTodo, DeleteTodo } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
const TodoView = () => {
  const dispatch = useAppDispatch();
  const { Todo } = useAppSelector((state) => state.Todo);

  const [task, setTask] = useState<string>("");
  const [taskId , setTaskId] = useState<number | undefined>();
  return (
    <>
      <h1>Todo Management Application</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={() => {
          if(taskId){
            dispatch(EditTodo({id:taskId,task}))
            setTask("")
            setTaskId(undefined)

          }
          else if(task.length > 0 ){
            dispatch(AddTodo(task));
            setTask("")
          }
          
        }}
      >
       {taskId ? "Update Task" : "Add Task"}
      </button>

      {Todo.length > 0 && Todo.map(todo=><p>{todo.task}
      <button onClick={()=>{setTaskId(todo.id); setTask(todo.task)}} >EditTodo</button>
      <button onClick={()=>dispatch(DeleteTodo(todo.id))}>DeleteTodo</button></p>)}
    </>
  );
};

export default TodoView;
