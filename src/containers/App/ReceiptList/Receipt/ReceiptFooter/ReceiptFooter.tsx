import React, {FunctionComponent, useContext} from 'react';
import "./receipt_footer.scss"
import Money from "../../../../../components/Money/Money";
import {PriceContext} from "../../../../../contexts/PriceContext";

const ReceiptFooter: FunctionComponent<ReceiptFooterInterface> = ({totalPrice}) => {
    return (
        <div className="receipt-footer">
            <div>
                Total
            </div>
            <Money money={totalPrice}/>
        </div>
    );
};

export default ReceiptFooter;

interface ReceiptFooterInterface {
    totalPrice: number
}