import './Expenses.css'
import ExpenseItem  from "./ExpenseItem"
import Card from './Card'
const Expenses= ({expenses}) => {
    return(
        <Card className='expenses'> 
        {expenses.map(item=>
            <ExpenseItem title={item.title} amount={item.amount} date={item.date}  key={item.id}/>
        )}

        </Card>
    )
}


export default Expenses