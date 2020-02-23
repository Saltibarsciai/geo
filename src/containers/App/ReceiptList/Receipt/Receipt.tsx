import React, {FunctionComponent, useState} from 'react';
import "./receipt.scss"
import ReceiptHeader from "./ReceiptHeader/ReceiptHeader";
import ExpensesList from "./ExpensesList/ExpensesList";
import ReceiptFooter from "./ReceiptFooter/ReceiptFooter";
import ExpenseInterface from "../../../../types/ExpenseInterface";
import uuid from "uuid/v4";

const Receipt:FunctionComponent<ReceiptListInterface> = () => {
    const [expenses, setExpenses] = useState<ExpenseInterface[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const addExpense = () => {
        setExpenses([...expenses, {note: '', price: 0, id: uuid()}]);
    };
    const setReceiptPrice = (receiptPrice: React.SetStateAction<number>) => {
        setTotalPrice(receiptPrice)
    };
    return (
        <article>
            <ReceiptHeader addExpense={addExpense}/>
            <ExpensesList setTotalPrice={setReceiptPrice} expenses={expenses}/>
            <ReceiptFooter totalPrice={totalPrice}/>
        </article>
    );
};

export default Receipt;
interface ReceiptListInterface {

}