import React from "react";
import { data } from "../../todos";

const index = () => {
  const [todos, setTodos] = React.useState(data);
  const taskRef = React.useRef();

  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;
  const todosLength = todos.length;

  const handleRemove = (id) =>
    setTodos((pre) => pre.filter((todo) => todo.id !== id));

  const handleComplete = (id) =>
    setTodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      title: taskRef.current.value,
      id: Date.now(),
      isCompleted: false,
    };
    //Reset
    console.log(Date.now());
    taskRef.current.value = "";
    setTodos((pre) => [...pre, newTodo]);
  };

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo handleAdd={handleAdd} taskRef={taskRef} />
      <div className="h-10" />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleComplete={handleComplete}
          handleAdd={handleAdd}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p>
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
  );
};

export default index;

const Todo = ({ todo, handleRemove, handleComplete }) => {
  return (
    <div
      className={`w-full flex justify-between items-center p-4 mb-2 ${
        todo.isCompleted ? "bg-gray-400" : "bg-green-400"
      }`}
    >
      <p
        className={`
          ml-2 text-xl font-sans font-medium
          ${todo.isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
      >
        {todo.title}
      </p>
      <div className="w-1/6 flex justify-between items-center mr-2">
        <button
          onClick={() => handleRemove(todo.id)}
          className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
        >
          X
        </button>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleComplete(todo.id)}
        />
      </div>
    </div>
  );
};

const AddTodo = ({ handleAdd, taskRef }) => (
  <form onSubmit={handleAdd} className="flex justify-between w-full">
    <input
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      type="text"
      ref={taskRef}
    />
  </form>
);
