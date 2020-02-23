import React, {FunctionComponent} from 'react';
import "./receipt_list.scss"
import Receipt from "./Receipt/Receipt";

const ReceiptList: FunctionComponent<ReceiptListInterface> = ({receipts}) => {
    const renderList = () => {
        let rows = [];
        for(let i = 0; i < receipts; i++) {
            rows.push(<Receipt key={i}/>);
        }
        return rows
    };
    return (

        <main>
            {renderList()}
        </main>
    );
};

export default ReceiptList;

interface ReceiptListInterface {
    receipts: number;
}