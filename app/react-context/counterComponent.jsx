"use client";
import { useState, createContext } from "react";

// Define a type of context:
const counterContext = createContext(null);

const AddCounter = ({ setCounter }) => {
  return (
    <button
      className="bg-white rounded-lg text-black p-2"
      onClick={() => setCounter((value) => value + 1)}
    >
      Add Counter
    </button>
  );
};

const CounterContainer = ({ counter }) => {
  return <CounterElement counter={counter}></CounterElement>;
};
const CounterElement = ({ counter }) => {
  return (
    <div className="mt-2">
      <p>Counter: {counter}</p>
    </div>
  );
};

export default function CounterComponent() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <AddCounter setCounter={setCounter}></AddCounter>
      <CounterContainer counter={counter}></CounterContainer>
    </>
  );
}
