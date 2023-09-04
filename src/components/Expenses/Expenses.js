import './Expenses.css'
import ExpenseItem  from "./ExpenseItem"
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card'
import { useState } from 'react'
const Expenses= ({expenses}) => {
    const[filterYear,setFilterYear]= useState('2020')
    const filterChangeHandler = selectedYear =>{
        setFilterYear(selectedYear);
    }
    return(
        <Card className='expenses'> 
        <ExpensesFilter  selected={filterYear} onChangeFilter={filterChangeHandler}/>
        {expenses.map(item=>
            <ExpenseItem title={item.title} amount={item.amount} date={item.date}  key={item.id}/>
        )}

        </Card>
    )
}


export default Expenses