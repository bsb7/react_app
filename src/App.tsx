import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Theme from "./components/ThemeToggle/Theme";
import { ThemeContext } from "./context/Context";
import { CounterProvider } from "./components/Counter/CounterProvider";
import Timer from "./components/Timer/Timer";

const App = () => {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div className={`app ${theme}`}>
      <Theme />
      <CounterProvider>
        <Counter />
      </CounterProvider>

      <hr />
      <Timer />
    </div>
  );
};

export default App;
