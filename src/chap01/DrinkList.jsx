import React from "react";
import Drink from "./Drink";

function DrinkList() {
	return (
		<div>
			<Drink name="콜라" price={2000} />
			<Drink name="환타" price={1800} />
			<Drink name="홍차" price={2500} />
			<Drink name="커피" price={1500} />
		</div>
	);
}

export default DrinkList;
