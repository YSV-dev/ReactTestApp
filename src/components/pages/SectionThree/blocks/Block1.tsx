import { useAppSelector } from "../../../../store"
import ToDoList from "../../../ToDoList/ToDoList"
import "./style/style.css"

export default function Block1() {
  const filterBrand = useAppSelector<string>(state => state.tableReducer.filterBrand)

  return (
    <div>
        <h4>Подменю 1</h4>
        <p>Результат селектора: <b>{filterBrand}</b></p>
        <ToDoList editable={false}></ToDoList>
    </div>
  )
}

