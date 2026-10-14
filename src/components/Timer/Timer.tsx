import { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(intervalRef.current ?? undefined);
    setTimer(0);
  }

  return (
    <>
      <p>{timer}</p>
      <button onClick={handleStart} style={{ margin: "2rem" }}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default Timer;
