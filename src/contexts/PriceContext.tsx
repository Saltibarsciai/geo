import React, {Component, createContext} from 'react';

// @ts-ignore
export const PriceContext = createContext();

class PriceContextProvider extends Component{
    state = {
        price: 0
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (

        )
    }
}
export default  PriceContextProvider;