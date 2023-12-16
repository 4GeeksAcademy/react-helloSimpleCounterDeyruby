import React from "react";

const SecondsCounter= (props)=>{
	let counter1 = props.cuenta
	let counter2= 0;
	let counter3= 0;
	let counter4=0
	let counter5=0;
	let counter6=0;

	if(props.cuenta>9) {
		counter2 = Math.floor(props.cuenta / 10)
		counter1= props.cuenta % 10
		if(counter2>9){
			counter3= Math.floor(counter2/ 10)
			counter2= counter2 % 10
			if(counter3>9){
				counter4= Math.floor(counter3/ 10)
				counter3= counter3 % 10
				if(counter4>9){
					counter5= Math.floor(counter4 /10)
						counter4= counter4 %10
						if(counter5>9){
							counter6= Math.floor(counter5 /10)
							counter5= counter5 %10
						}

					}
				}


			}

		}
	
    return (
        <div className= " container d-flex justify-content-center bg-dark mt-5">
         <div className=" text-white px-5 mx-2 mt-2"><i className="fa-regular fa-clock fs-1" ></i></div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter6}</div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter5}</div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter4}</div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter3}</div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter2}</div>
		 <div className=" text-white px-5 mx-2 bg-info rounded fs-1">{counter1}</div>
		</div>
    );

}
export default SecondsCounter;