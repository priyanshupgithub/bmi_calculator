import { useState } from "react";
import LabelComponent from "./Components/LabelComponent";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  let [count,setCount] = useState(0);
  console.log("value of wight : ".weight);
  console.log("value of height".height);
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
  const increase = ()=>{
    count = count+1;
    setCount(count);
  }

  const decrease = ()=>{
    count = count-1;
    setCount(count);
  }
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen border-2 border-black-400 bg-slate-500">
      <div className="border-red-700 border-2 m-2 p-2 rounded-md shadow-md">
        <h1 className=" text-2xl font-bold shadow-md text-center">BMI Calculator</h1>
        <div>
          <LabelComponent label= "weight" value = {weight} onChange = {(e)=>{setWeight(e.target.value)}}/>
          <LabelComponent label= "height" value = {height} onChange = {(e)=>{setHeight(e.target.value)}}/>
        </div>
        <button className="text-white text-center block m-auto my-2 font-bold border-2 border-black p-2   rounded-full hover:bg-slate-600" onClick={calculateBmi}>Calculate</button>
        <button className="text-white text-center block m-auto my-2 font-bold border-2 border-black p-2   rounded-full hover:bg-slate-600" onClick={resetValues}>Reset</button>
        {bmi && (
          <div className="mt-4 text-center">
                <p >you entered the weight : <span className="font-bold text-white">{weight}KG</span> and Height : <span className="font-bold text-white">{height} Meter</span> </p>
                <h2 className="text-xl font-bold">Your BMI is: {bmi}</h2>
              </div>
            )}
      </div>

    </div>

    </>
  );
}
export default App