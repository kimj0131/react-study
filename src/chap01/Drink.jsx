function Drink(props) {
	return (
		<div>
			<h3>{/* JavaScript scope */ `이 음료의 이름은 ${props.name}입니다.`}</h3>
			<p>{`이 음료의 가격은 ${props.price}입니다.`}</p>
		</div>
	);
}

export default Drink;
