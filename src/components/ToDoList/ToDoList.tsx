import React, { useRef, useState } from 'react'
import { IToDo } from '../../models/IToDo'
import { todoSlice } from '../../store/reducers/ToDoSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import "./style/style.css"

interface IToDoProps {
    editable: boolean;
}

export default function ToDoList(props: IToDoProps) {
    const data: IToDo[] = useAppSelector<IToDo[]>(state => state.todoReducer.todos)
    const add = todoSlice.actions.add;
    const edit = todoSlice.actions.edit;
    const remove = todoSlice.actions.remove;
    const setStatus = todoSlice.actions.setStatus;
  
    const [text, setText] = useState("");
    const [editingTask, setEditingTask] = useState<number>(-1);

    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const addTask = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (text.length > 0){
            dispatch(add(text));
            inputRef.current!.value = "";
            setText("");
        }
    }

    const isEditable = props.editable;

    //Можно было бы реализовать и формой, но так проще
    return (
        <>
            {
                isEditable && <><input ref={inputRef} onInput={(e) => setText(e.currentTarget.value)} type="text" style={{width: "80%"}} defaultValue={text} />
                <button onClick={addTask} style={{width: "20%"}}>Добавить</button>
                </>
            }
            <table className='todo-list-table'>
                <tbody>
                    {
                        data.map((row: IToDo, index) => {
                            const id = row.id;
                            const isSelected = row.selected;
                            

                            const textDecoration = isSelected?"line-through":"none"
                            const isEditing = editingTask == row.id;
                            return <tr key={row.id} className="todo-row">
                                        {
                                            isEditable && (<td style={{width: "25px"}}>
                                            <button onClick={() => dispatch(remove(id))}>&#215;</button>
                                            </td>)
                                        }
                                        <td style={{width: "40px", textAlign: "center"}}> {index+1}) </td>
                                        <td style={{wordWrap: "break-word", textDecoration: textDecoration}}>
                                            {isEditing?
                                                <input onInput={(e) => dispatch(edit({id, text: e.currentTarget.value}))} style={{width: "100%"}} defaultValue={row.text}/>:
                                                <span>{row.text}</span>}
                                        </td>
                                        {
                                            isEditable &&(
                                            <>
                                                <td style={{width: "40px"}}>
                                                    {isEditing?
                                                        <button onClick={() => {
                                                                                setEditingTask(-1); 
                                                                            }}>&#9989;</button>:
                                                        <button onClick={() => setEditingTask(id)}>&#9997;</button>}
                                                </td>
                                                <td style={{width: "25px"}}>
                                                    <input onChange={(e) => dispatch(setStatus({id, selected: e.target.checked}))} type="checkbox" defaultChecked={isSelected}/>
                                                </td>
                                            </>)
                                        }
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
