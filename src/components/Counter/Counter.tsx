import { useContext } from "react";
import { CountContext } from "../../context/Context";

const Counter = () => {
  const { count, countDispatch } = useContext(CountContext)!;

  return (
    <>
      <div className="card">{count}</div>

      <button
        className="button-primary"
        onClick={() => countDispatch({ type: "INCREMENT", payload: 5 })}
      >
        Increment
      </button>
      <button
        className="button-primary"
        onClick={() => countDispatch({ type: "DECREMENT", payload: 1 })}
      >
        Decrement
      </button>
      <button
        className="button-primary"
        onClick={() => countDispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <hr />
    </>
  );
};

export default Counter;
