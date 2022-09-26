import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterBy2 from "./components/CounterBy2";
import CounterBy5 from "./components/CounterBy5";
import { useDispatch } from "react-redux";

function App() {
  const [showCounter2, setShowCounter2] = useState(false);
  const [showCounter3, setShowCounter3] = useState(false);
  const dispatch = useDispatch();

  var clicked = 1;
  const addNewCounter = () => {
    clicked++;
    if (clicked === 2) {
      return setShowCounter2(true);
    } else if (clicked === 3) {
      return setShowCounter3(true);
    }
  };

  const handleReset = () => {
  dispatch({
  type: "RESET"})};

  return (
    <div>
      <h1 className="font-bold text-center text-2xl mt-10 mb-5">
        Sinple Counter App
      </h1>
      <Counter></Counter>
      {showCounter2 ? <CounterBy2></CounterBy2> : <></>}
      {showCounter3 ? <CounterBy5></CounterBy5> : <></>}
      <div className="max-w-md mx-auto flex flex-col items-center justify-center mt-6">
        <div className="space-x-3">
          <button
            onClick={addNewCounter}
            className="bg-blue-700 text-white uppercase font-medium px-3 py-2 rounded shadow"
          >
            Add Counter
          </button>
          <button
            className="bg-red-500 text-white px-3 py-2 rounded shadow uppercase"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
