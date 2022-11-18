import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from "./Todo";

const style = {
  background: `h-screen w-screen p-4 bg-gradient-to-r from-[#2E1056] to-[#7A53E6]`,
  c: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  headers: `text-2xl font-bold text-center text-gray-700 p-3`,
  counters: `text-center p-2`,
  form: `flex justify-between`,
  forminputs: `border p-2 w-full text-xl`,
  buttons: `border p-4 ml-2 bg-blue-800 text-slate-100`

}
function App() {
  const arr = [
    {
      id: 1,
      name: "Walk dog",
    },
    {
      id: 2,
      name: "Walk cat",
    }
  ]

  const [data, setData] = useState(arr);
  const [input, setInput] = useState('');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const deleteTodo = (index) => {
    const newData = data.filter(dat=>dat.name !== index);
    setData(newData);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const format = [
      {
        id: Math.floor(Math.random() * 10000),
        name: input
      }
  ];
    const newList = data.concat(format)
    setData(newList)
  };


  return (
    <div className={style.background}>
      <div className={style.c}>

        <h3 className={style.headers}>mani Todo App</h3>
        <p className={style.counters}>You have {data.length} todos</p>

        <form onSubmit={handleSubmit} className={style.form}>
          <input value={input} onChange={handleChange} className={style.forminputs} type="text" placeholder="Add Todo" />
          <button onSubmit={handleSubmit} className={style.buttons}><AiOutlinePlus size={30} /></button>
        </form>

        <ul>
          {data.map((todo, index) => (
            <Todo key={index} 
              todo={todo.name} 
              deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
