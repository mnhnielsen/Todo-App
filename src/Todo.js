import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const style ={
    list: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    listComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    entry: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Todo = ({todo}) => {
    return(
        <li className={style.list}>
            <div className={style.entry}>
                <input type="checkbox"/>
                <p className={style.text}>{todo}</p>
            </div>
            <button>{<FaRegTrashAlt />}</button>
        </li>
    )
}

export default Todo