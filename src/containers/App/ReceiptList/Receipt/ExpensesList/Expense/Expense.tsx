import React, {FunctionComponent, useState} from 'react';
import "./expense.scss"
import MExpenseInterface from "../../../../../../types/ExpenseInterface";
import HandleEventInterface from "../../../../../../types/HandleEventInterface";
import uuid from "uuid/v4";

const Expense: FunctionComponent<ExpenseInterface> = ({note, price, id, changed}) => {
    const [m_note, setNote] = useState<string>(note);
    const [m_price, setPrice] = useState<number>(price);
    const changeNote = (event: HandleEventInterface) => {
        setNote(event.target.value);
        changed({note: event.target.value, price: m_price, id});
    };
    const changePrice = (event: HandleEventInterface) => {
        setPrice(Number(event.target.value));
        changed({note: m_note, price: Number(event.target.value), id});
    };
    return (
        <div className="expense">
            <input onChange={changeNote} placeholder={"note"} type={"text"} value={m_note}/>
            <input onChange={changePrice} placeholder={"price"} type={"text"} value={m_price}/>
        </div>
    );
};

export default Expense;

interface ExpenseInterface {
    note: string,
    id: string,
    price: number,
    changed: (expense: { note: string; price: number, id: string }) => void
}
