import React, {FunctionComponent} from 'react';
import "./money.scss"

const Money:FunctionComponent<MoneyInterface> = ({money}) => {
    return (
        <div className="money">
            {money}
        </div>
    );
};

export default Money;
interface MoneyInterface {
    money: number
}