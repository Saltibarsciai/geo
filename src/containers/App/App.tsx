import React, {useState} from 'react';
import './App.scss';
import ReceiptList from "./ReceiptList/ReceiptList";
import Footer from "./Footer/Footer";
import PriceContextProvider from "../../contexts/PriceContext";

function App() {
    const [receipts, setReceipts] = useState(0);

    return (
        <div className="App">
            <PriceContextProvider>
                <ReceiptList receipts={receipts}/>
                <Footer createReceipt={() => setReceipts(receipts+1)}/>
            </PriceContextProvider>
        </div>
    );
}

export default App;
