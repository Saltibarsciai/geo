import React, {FunctionComponent} from 'react';
import Categories from "./Categories/Categories";
import "./receipt_header.scss"
import BaseButton from "../../../../../components/BaseButton/BaseButton";

const ReceiptHeader: FunctionComponent<ReceiptHeaderInterface> = ({addExpense}) => {
    return (
        <div className="receipt-header">
            <Categories/>
            <div className="button">
                <BaseButton clicked={() => addExpense()} text={"Add expense"}/>
            </div>
        </div>
    );
};

export default ReceiptHeader;

interface ReceiptHeaderInterface {
    addExpense: () => void
}