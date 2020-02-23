import React, {FunctionComponent} from 'react';
import "./base-button.scss"

const BaseButton: FunctionComponent<BaseButtonInterface> = ({text, clicked}) => {
    return (
        <div onClick={clicked} className="base-button">
            {text}
        </div>
    );
};

export default BaseButton;

interface BaseButtonInterface {
    text: string,
    clicked: () => void
}