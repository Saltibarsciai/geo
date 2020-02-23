import React, {FunctionComponent, useContext} from 'react';
import "./footer.scss"
import BaseButton from "../../../components/BaseButton/BaseButton";
import Money from "../../../components/Money/Money";
import {PriceContext} from "../../../contexts/PriceContext";

const Footer: FunctionComponent<FooterInterface> = ({createReceipt}) => {
    const {price} = useContext(PriceContext);
    return (
        <footer>
            <div>Total</div>
            <Money money={price}/>
            <BaseButton clicked={()=>{createReceipt()}} text={"Add receipt"}/>
        </footer>
    );
};

export default Footer;

interface FooterInterface {
    createReceipt: () => void
}