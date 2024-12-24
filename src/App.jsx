import { useState } from "react";
import CartComponent from "./Components/CartComponent";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const calculatedBMI = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);
    } else {
      alert("Please enter both weight and height.");
    }
  };

  const resetValues = () => {
    setWeight("")
    setHeight("")
    setBmi("")
  }

  return (
    <>
      <CartComponent
      weight = {weight}
      setWeight = {setWeight}
      height = {height}
      setHeight = {setHeight}
      bmi = {bmi}
      calculateBmi = {calculateBmi}
      resetValues = {resetValues}
      />
    </>
  );
}
export default App