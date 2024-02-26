function Clock(props) {
	return (
		<div>
			<h1>리액트 시계입니다.</h1>
			<p>현재 시간 : {new Date().toString()}</p>
		</div>
	);
}

export default Clock;
