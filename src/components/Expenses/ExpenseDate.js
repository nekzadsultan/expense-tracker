import './ExpenseDate.css'
import Card  from '../UI/Card'
const ExpenseDate= ({date})=>{
    const month=date.toLocaleString('en-US', {month:'long'})
    const day=date.toLocaleString('en-Us',{day:'2-digit'})
    const year=date.getFullYear();
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day">{year}</div>
        </Card>
    )
}


export default ExpenseDate