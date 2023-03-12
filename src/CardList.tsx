import { CardC } from "./CardC";
import { Card } from "./App";

interface CardListProps {
    cards: Card[];
}
export function CardList({ cards }: CardListProps) {
    return (
        <div className="hand">
            {cards.map((c) => (
                <CardC id={c} key={c} />
            ))}
        </div>
    );
}
