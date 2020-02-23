import React, {Component, createContext} from 'react';

export const PriceContext = createContext(null);

class PriceContextProvider extends Component<PropsInterface, StateInterface>{
    state = {
        receipts: [] as Receipt[],
        price: 0
    };

    setFooterPrice = (price: number, id: string) => {
        let index = this.state.receipts.map((val) => {return val.id}).indexOf(id);
        if(index >= 0){
            let receipts = [...this.state.receipts];
            receipts[index].totalPrice = price;
            let money = 0;
            receipts.map(value => {
                money+=value.totalPrice;
                return value;
            });

            this.setState({
                price: money
            });
        }else{
            this.setState({
                price: this.state.price + price,
                receipts: [...this.state.receipts, {totalPrice: price, id}]
            });
        }
    };
    render(): React.ReactElement<any, string> {
        return (
            <PriceContext.Provider value={{...this.state, setFooterPrice: this.setFooterPrice}}>
                {this.props.children}
            </PriceContext.Provider>
        )
    }
}
export default  PriceContextProvider;

interface StateInterface {
    price: number,
    receipts: Receipt[]
}
interface PropsInterface {}
interface Receipt {totalPrice: number, id:string}