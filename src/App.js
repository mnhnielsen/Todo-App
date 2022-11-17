import React, {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
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
const [data, setData] = useState(['Learn Italian', 'Learn to drive a tractor'])

  return (
    <div className={style.background}>
      <div className={style.c}>
        <h3 classname={style.headers}>mani Todo App</h3>
        <p classname={style.counters}>You have 2 todos</p>
        <form classname={style.form}>
          <input classname={style.forminputs} type="text" placeholder="Add Todo"/>
          <button classname={style.buttons}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {data.map((todo, index)=>(
          <Todo key={index} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
