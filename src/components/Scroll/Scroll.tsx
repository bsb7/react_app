import { useRef, useState } from "react";

const Scroll = () => {
  const [inputText, setInputText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const clearInput = () => {
    setInputText("");
  };
  const handleClick = () => {
    inputRef.current?.focus();
  };
  const handleScroll = () => {
    boxRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleMeasurementBox = () => {
    const measurement = boxRef.current?.getBoundingClientRect();
    console.log("HEIGHT:", measurement?.height);
    console.log("WIDTH:", measurement?.width);
    console.log("TOP:", measurement?.top);
    console.log("BOTTOM:", measurement?.bottom);
  };

  const handleInputChange = (e) => {
    console.log("this is changing the input value");
    console.log(e.target.value);
    if (inputRef.current?.value) {
      // setInputText(inputRef.current.value);
      setInputText(e.target.value);
      console.log(inputRef.current.value);
    }
    if (e.target.value == "") {
      e.target.value = "";
    }
  };

  return (
    <>
      <button onClick={handleScroll}>Handle Scroll</button>
      <button onClick={handleMeasurementBox}>Measure Box</button>
      <br />
      <br />
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        value={inputText}
      />
      <button onClick={handleClick}>Fucus Input</button>
      <br />
      <br />
      {inputText}
      <button onClick={clearInput}>Clear Input</button>
      <div
        style={{ height: "100vh", width: "80dvw", backgroundColor: "gray" }}
        ref={boxRef}
      >
        test for scroll
      </div>
    </>
  );
};

export default Scroll;
