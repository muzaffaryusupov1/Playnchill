import { MinusIcon, PlusIcon } from "../assets/icons";

function Counter({ count, onIncrement, onDecrement }) {
    return (
        <div className="flex items-center gap-3">
            <button className="p-3 fill-white" onClick={onDecrement}>
                <MinusIcon />
            </button>
            <span className="font-medium text-2xl text-white">{count}</span>
            <button className="p-3 fill-white" onClick={onIncrement}>
                <PlusIcon />
            </button>
        </div>
    );
}

export default Counter;
