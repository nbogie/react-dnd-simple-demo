import { useState } from "react";
import "./App.css";
import { AuctionBoard } from "./AuctionBoard";
import { CardList } from "./CardList";
import { Furnace } from "./Furnace";

export type Card = string;

function App() {
    const [cards, setCards] = useState<string[]>(["10", "20", "30"]);
    const [auctionCards, setAuctionCards] = useState<string[]>([]);

    function placeCardInAuction(cardId: string) {
        setCards((p) => p.filter((c) => c !== cardId));
        setAuctionCards((prevCards) =>
            prevCards.includes(cardId) ? prevCards : [...prevCards, cardId]
        );
    }

    function placeCardInFurnace(cardId: string) {
        setCards((p) => p.filter((c) => c !== cardId));
    }

    return (
        <div className="App">
            <AuctionBoard
                cards={auctionCards}
                placeCardInAuction={placeCardInAuction}
            />

            <CardList cards={cards} />
            <Furnace placeCardInFurnace={placeCardInFurnace} />
        </div>
    );
}

export default App;
