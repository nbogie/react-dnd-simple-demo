import { useDrop } from "react-dnd";
import { ItemTypes as DNDItemTypes } from "./itemTypes";

interface FurnaceProps {
    placeCardInFurnace: (cardId: string) => void;
}
export function Furnace(props: FurnaceProps) {
    const [{ isOver, cardId }, dropRef] = useDrop(() => ({
        accept: DNDItemTypes.CARD,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            cardId: monitor.getItem(),
        }),
        drop: (item) => {
            console.log("drop in furnace!", { item });
            props.placeCardInFurnace((item as { id: string }).id);
        },
    }));

    return (
        <div
            className={"furnace " + (isOver ? "draggedOver" : "")}
            ref={dropRef}
        >
            Furname
            {isOver ? (
                <p>Object: {JSON.stringify(cardId)} is over</p>
            ) : (
                <p>no drag</p>
            )}
        </div>
    );
}
