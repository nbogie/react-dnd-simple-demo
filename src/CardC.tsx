import { useDrag } from "react-dnd";
import { ItemTypes as DNDItemTypes } from "./itemTypes";

export function CardC(props: { id: string }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: DNDItemTypes.CARD,
        item: { id: props.id, extra: "hello" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={"card " + (isDragging ? "dragged" : "static")}
            ref={dragRef}
        >
            <div className="text">id: {props.id}</div>
        </div>
    );
}
