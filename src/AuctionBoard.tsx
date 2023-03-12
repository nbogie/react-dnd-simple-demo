import { useDrop } from "react-dnd";
import { Card } from "./App";
import { CardC } from "./CardC";
import { CardList } from "./CardList";
import { ItemTypes as DNDItemTypes } from "./itemTypes";

interface AuctionBoardProps {
    placeCardInAuction: (cardId: string) => void;
    cards: Card[];
}
export function AuctionBoard(props: AuctionBoardProps) {
    const [{ isOver, cardId }, dropRef] = useDrop(() => ({
        accept: DNDItemTypes.CARD,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            cardId: monitor.getItem(),
        }),
        drop: (item) => {
            console.log("drop", { item });
            props.placeCardInAuction((item as { id: string }).id);
        },
    }));

    return (
        <div
            className={"auctionBoard " + (isOver ? "draggedOver" : "")}
            ref={dropRef}
        >
            Auction Board
            <br />
            <CardList cards={props.cards} />
            {isOver ? (
                <p>Object: {JSON.stringify(cardId)} is over</p>
            ) : (
                <p>no drag</p>
            )}
        </div>
    );
}
