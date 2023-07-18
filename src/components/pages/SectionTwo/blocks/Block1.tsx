import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../../../models/IProduct';
import { useAppDispatch, useAppSelector } from '../../../../store'
import ProductsTable from '../../../ProductsTable/ProductsTable';
import { tableSlice } from '../../../../store/reducers/TableSlice';
import "./style/style.css"

export default function Block1() {
  const filterBrand = useAppSelector<string>(state => state.tableReducer.filterBrand)
  const filterTitle = useAppSelector<string>(state => state.tableReducer.filterTitle)
  const setFilterBrand = tableSlice.actions.setFilterBrand;
  const setFilterTitle = tableSlice.actions.setFilterTitle;

  const [filterData, setFilterData] = useState<string[]>([]);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(filterBrand);
  }, [filterBrand, filterTitle])

  return (
    <div>
        <table>
          <tbody>
            <tr><td><label>Brand: </label></td>
                <td>
                    <select style={{width: "100%"}}value={filterBrand} onChange={(event) => dispatch(setFilterBrand(event.currentTarget.value))}>
                        <option value="">Все</option>
                        {filterData.map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>
                </td>
            </tr>
            
            <tr>
                <td><label>Title: </label></td>
                <td><input type="text" onInput={(event) => dispatch(setFilterTitle(event.currentTarget.value))} defaultValue={filterTitle}/></td>
            </tr>
          </tbody>
        </table>
        
        <ProductsTable setFilterData={setFilterData}/>
    </div>
  )
}

