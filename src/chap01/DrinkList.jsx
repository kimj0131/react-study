import React from "react";
import Drink from "./Drink";

// 상위 컴포넌트
function DrinkList() {
	return (
		<div>
			{/* 하위 컴포넌트 */}
			<Drink name="콜라" price={2000} />
			<Drink name="환타" price={1800} />
			<Drink name="홍차" price={2500} />
			<Drink name="커피" price={1500} />
		</div>
	);
}

export default DrinkList;
