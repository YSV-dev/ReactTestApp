import React, { useEffect, useState } from 'react'
import { IProduct } from '../../models/IProduct';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import axios from 'axios';

interface ITableProductsProps {
  setFilterData(arg0: string[]): void;
}

export default function ProductsTable(props: ITableProductsProps) {
  //Решил не сохранять именно результат запроса, но если необходимо, есть соотвествующий стейт

  //const products = useAppSelector<IProduct[]>(state => state.tableReducer.products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<IProduct[]>([]);

  const filterBrand = useAppSelector<string>(state => state.tableReducer.filterBrand)
  const filterTitle = useAppSelector<string>(state => state.tableReducer.filterTitle)

  //const setTableData = tableSlice.actions.setData;
  //const dispatch = useAppDispatch();

  async function fetchData(){
    try {
        const {data} = await axios.get("https://dummyjson.com/products?limit=6");
        const uniqueBrands: string[] = Array.from(new Set(data.products.map((row: any) => row!.brand)));
        //dispatch(setTableData(data.products));
        const filteredData = data.products.filter(function(row:IProduct) {
          return (
            ((row.brand === filterBrand) || filterBrand==="")
            && row.title.includes(filterTitle)
            );
        });

        setData(filteredData);
        if(props.setFilterData){
          props.setFilterData(uniqueBrands);
        }
    } catch(e) {
        console.log(e);
        setError(true);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    console.log("Загрузка содержимого...");
  }, [filterBrand, filterTitle]);

  if (error) {
    console.log("Ошибка!");
  }

  if (!data) {
    console.log("Данные отсуствуют!");
  }

  if (!loading)
    return (
      <table>
          <thead>
              <tr><th>ID</th><th>Brand</th><th>Title</th></tr>
          </thead>
          <tbody>
            {
              data.map((row: IProduct) => {
                return <tr key={row.id}><td>{row.id}</td><td>{row.brand}</td><td>{row.title}</td></tr>
              })
            }
          </tbody>
      </table>
    )
  else 
    return (<h1>Загрузка содержимого...</h1>)
}
