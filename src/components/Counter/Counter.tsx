import { useContext, useRef } from "react";
import { CountContext } from "../../context/Context";

const Counter = () => {
  const { count, countDispatch } = useContext(CountContext)!;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

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
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Fucus Input</button>
    </>
  );
};

export default Counter;
