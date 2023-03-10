import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="auctionBoard">Auction Board</div>

            <div className="hand">
                <div className="card">C1</div>
                <div className="card">C2</div>
                <div className="card">C3</div>
            </div>

            <div className="furnace">Furnace</div>
        </div>
    );
}

export default App;
