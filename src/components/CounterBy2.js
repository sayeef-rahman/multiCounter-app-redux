import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterBy2 = () => {
  const store = useSelector((state) => state?.value2);
  console.log("Store 2 ", store);
  const dispatch = useDispatch();

  const handleIncrementByThree = () => {
    // console.log("Store: ",store.value);
    dispatch({
      type: "INCREMENT_BY_THREE",
    });
  };
  const handleDecrementByTwo = () => {
    // console.log("Store: ",store.value);
    dispatch({
      type: "DECREMENT_BY_TWO",
    });
  };
  return (
    <div className="w-screen bg-gray-100 text-slate-700 py-2">
      <div className="max-w-md mx-auto my-5 space-y-5">
        <div className="p-4 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold">{store? store:0}</div>
          <div className="flex space-x-3">
            <button className="bg-slate-600 text-white px-3 py-2 rounded shadow" onClick={handleIncrementByThree}>
              Increment by 3
            </button>
            <button className="bg-indigo-700 text-white px-3 py-2 rounded shadow" onClick={handleDecrementByTwo}>
              Decrement by 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterBy2;
