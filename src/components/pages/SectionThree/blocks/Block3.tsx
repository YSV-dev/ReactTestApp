import { useAppSelector } from '../../../../store'
import ProductsTable from '../../../ProductsTable/ProductsTable'

export default function Block3() {
  const text = useAppSelector<string>(state => state.textReducer.text)
  
  return (
    <div>
        <h4>Подменю 3</h4>
        <p>Текст: <b>{text}</b></p>
        <ProductsTable setFilterData={(arg0: string[]) => {} } />
    </div>
  )
}
