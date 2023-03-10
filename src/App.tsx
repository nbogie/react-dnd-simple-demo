import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./itemTypes";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="auctionBoard">Auction Board</div>

            <div className="hand">
                <CardC id={"C1"} />
                <CardC id={"C2"} />
                <CardC id={"C3"} />
            </div>

            <div className="furnace">Furnace</div>
        </div>
    );
}

export default App;

function CardC(props: { id: string }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: ItemTypes.CARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={"card " + (isDragging ? "dragged" : "static")}
            ref={dragRef}
        >
            <div className="text">{props.id}</div>
        </div>
    );
}
