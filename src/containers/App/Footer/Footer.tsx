import React, {FunctionComponent} from 'react';
import "./footer.scss"
import BaseButton from "../../../components/BaseButton/BaseButton";
import Money from "../../../components/Money/Money";

const Footer: FunctionComponent<FooterInterface> = (props) => {
    return (
        <footer>
            <div>Total</div>
            <Money money={10}/>
            <BaseButton text={"Add receipt"}/>
        </footer>
    );
};

export default Footer;

interface FooterInterface {

}