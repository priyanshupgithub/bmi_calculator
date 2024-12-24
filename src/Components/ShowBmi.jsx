import React from "react";

const ShowBmi = ({bmi}) => {
    return(
        <>
        {bmi && (bmi<18.5 ? ( <h1 className="text-center">You are UnderBMI</h1>) :
                bmi<25?(<h1 className="text-center">You have normal BMI</h1>):
                (<h1 className="text-center">You are overweight</h1>)
              )
              }
        </>
    )
}

export default ShowBmi;