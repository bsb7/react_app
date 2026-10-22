import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Theme from "./components/ThemeToggle/Theme";
import { ThemeContext } from "./context/Context";
import { CounterProvider } from "./components/Counter/CounterProvider";
import Timer from "./components/Timer/Timer";
import Card from "./components/Card/Card";

const App = () => {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div className={`app ${theme}`}>
      <Theme />
      <Card />
      {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}
      {/* <Timer /> */}
    </div>
  );
};

export default App;
