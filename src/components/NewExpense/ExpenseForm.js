import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = ({onSaveExpenseData}) =>{
    const [enterTitle,setenterTitle]= useState('')
    const [enterAmount,setenterAmount]=useState('')
    const [enterDate,setenterDate]=useState('')

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',

    // })
    const titleChangeHandler= event => {
        setenterTitle(event.target.value)
        // setUserInput={
        //     ...userInput,
        //     enteredTitle:event.target.value
        // }
        // setUserInput=(prevState=>{return {...prevState,enterTitle:event.target.value}})
    }
    const amountChangeHandler = event =>{
        setenterAmount(event.target.value) 
        // setUserInput={
        //     ...userInput,
        //     enteredAmount:event.target.value
        // }
    }

    const  dateChangeHandler = event =>{
        setenterDate(event.target.value)
        // setUserInput={
        //     ...userInput,
        //     enteredDate:event.target.value
        // }
    }
    const submitHandler = event => {
        event.preventDefault();
        const expenseData={
           title:enterTitle,
           amount:enterAmount,
           date:new Date(enterDate) 
        }
        setenterTitle('')
        setenterAmount('')
        setenterDate('')
        onSaveExpenseData(expenseData)
        
    }
   
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enterTitle}/>
                 </div>
                 <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enterAmount}/>
                 </div>
                 <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enterDate} />
                 </div>
                 <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                 </div>
            </div>
        </form>
    )
}
export default ExpenseForm