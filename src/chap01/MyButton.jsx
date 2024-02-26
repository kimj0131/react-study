// 다른 파일에 있는 원하는 문법을 가져와서 사용할 수 있다
import { useState } from "react";

// JSX : 좀 더 세련된 방식의 리액트 (JS + XML/HTML)
function MyButton(props) {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<button onClick={() => setIsClicked(true)}>
			{isClicked ? `잘하셨습니다 ${props.name}님` : `여기를 누르세요 ${props.name}님`}
		</button>
	);
}

// 이 파일의 MyButton을 다른 파일에서 import 할 수 있게 만들어준다
export default MyButton;
