import { useContext } from "react";
import "./App.css";
import Theme from "./components/ThemeToggle/Theme";
import { ThemeContext } from "./context/Context";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Test from "./components/Test/Test";

const App = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div className={`app ${theme}`}>
      <ErrorBoundary>
        <Theme />
        <Test />
      </ErrorBoundary>
    </div>
  );
};

export default App;
