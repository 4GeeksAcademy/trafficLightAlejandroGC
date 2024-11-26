import React, {act, useState} from "react";
import Light from "./light";

//create your first component
const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [upOrder, setUpOrder] = useState(false);
	const [purpleLight, setPurpleLight] = useState(false);


	function handleClick(){
		let aux = activeIndex;
	
		upOrder ? setActiveIndex(--aux) : setActiveIndex(++aux);
		
		if (purpleLight){
			activeIndex === 1 && setUpOrder(false);
			activeIndex === 2 && setUpOrder(true);
		} else{
			activeIndex === 1 && setUpOrder(!upOrder);
		}
	}

	return (
		<div>
			<div className={"box text-center d-flex flex-column justify-content-around bg-black rounded p-2 mb-5"}>
				<Light color="danger" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} purpleLight={purpleLight}/>
				<Light color="warning" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} purpleLight={purpleLight}/>
				<Light color="success" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)} purpleLight={purpleLight}/>
				{purpleLight && <Light color="purple" isActive={activeIndex === 3} onShow={() => setActiveIndex(3)} purpleLight={purpleLight}/>}
			</div>
			<div className="d-flex flex-column justify-content-center mt-5">
				<button className="btn btn-secondary my-2" onClick={handleClick}>Change light</button>
				<button className="btn btn-secondary my-2" onClick={()=>setPurpleLight(!purpleLight)}>{purpleLight ? "Delete light" :  "Add light"}</button>
			</div>
		</div>
	);
};

export default Home;
