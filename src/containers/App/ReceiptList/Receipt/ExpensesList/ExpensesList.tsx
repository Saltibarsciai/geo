import React, {ContextType, FunctionComponent, useContext, useEffect, useState} from 'react';
import "./expenses-list.scss"
import Expense from "./Expense/Expense";
import ExpenseInterface from "../../../../../types/ExpenseInterface";
import uuid from "uuid/v4";
import {PriceContext} from "../../../../../contexts/PriceContext";

const ExpensesList: FunctionComponent<ExpensesListInterface> = ({expenses, setTotalPrice}) => {
    const [m_expenses, setExpenses] = useState<ExpenseInterface[]>(expenses);
    const [id] = useState<string>(uuid);

    const {setFooterPrice} = useContext(PriceContext);

    useEffect(()=>{setExpenses(expenses)}, [expenses]);

    const changeExpenses = (id: string, note: string, price: number) => {
        let index = m_expenses.map((val) => {return val.id}).indexOf(id);
        m_expenses[index].price = price;
        m_expenses[index].note = note;
        setPrice();
    };
    const setPrice = () => {
        let totalPrice = 0;
        m_expenses.map(value => {
            totalPrice+=value.price;
            return value
        });
        setTotalPrice(totalPrice);
        setFooterPrice(totalPrice, id);
    };
    return (
        <form className="expenses-list">
            {m_expenses.map(value => (
                <Expense changed={(expense: ExpenseInterface) => changeExpenses(expense.id, expense.note, expense.price)}
                         key={value.id} note={value.note} price={value.price} id={value.id}/>
            ))}
        </form>
    );
};

export default ExpensesList;

interface ExpensesListInterface {
    expenses: ExpenseInterface[],
    setTotalPrice: (totalPrice: number) => void
}
