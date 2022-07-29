import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="increment" onClick={increment}>
        Increment count
      </button>
    </div>
  );
};

export default App;
