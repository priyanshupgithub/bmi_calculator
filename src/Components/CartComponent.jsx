import LabelComponent from "./LabelComponent";
import ShowBmi from "./ShowBmi"

const CartComponent = ({weight,height,setHeight,setWeight,bmi,calculateBmi,resetValues}) =>{
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen border-2 border-black-400 bg-slate-50">
        <div className="border-black border-1 m-2 p-3 rounded-md shadow-lg bg-gray-500 w-80">
          <h1 className=" text-2xl font-bold shadow-md text-center m-2 p-2">BMI Calculator</h1>
          <div>
            <LabelComponent label= "weight" value = {weight} onChange = {(e)=>{setWeight(e.target.value)}}/>
            <LabelComponent label= "height" value = {height} onChange = {(e)=>{setHeight(e.target.value)}}/>
          </div>
          <div className="flex justify-between flex-wrap">
          <button className="text-white text-center w-28 m-auto my-2 font-bold border-2 border-black p-2   rounded-full hover:bg-slate-600" onClick={calculateBmi}>Calculate</button>
          <button className="text-white text-center w-28 m-auto my-2 font-bold border-2 border-black p-2   rounded-full hover:bg-slate-600" onClick={resetValues}>Reset</button>
          </div>
          {bmi && (
            <div className="mt-4 text-center">
                  <p >you entered the weight : <span className="font-bold text-white">{weight}KG</span> and Height : <span className="font-bold text-white">{height} Meter</span> </p>
                  <h2 className="text-xl font-bold">Your BMI is: {bmi}</h2>
                </div>
              )}
                <ShowBmi bmi = {bmi}/>
        </div>
  
      </div>
      </>
    )
}

export default CartComponent;