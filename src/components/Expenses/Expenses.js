import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card'
import ExpenseChart from "./ExpenseChart";
import { useState } from 'react'
const Expenses= ({expenses}) => {
    const[filterYear,setFilterYear]= useState('2020')
    const filterChangeHandler = selectedYear =>{
        setFilterYear(selectedYear);
    }
   const filteredExpenses =expenses.filter(item=>{
        return item.date.getFullYear().toString() === filterYear
   })
   
    return(
        <Card className='expenses'> 
        <ExpensesFilter  selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        </Card>
    )
}


export default Expenses