import React from "react";

const styles = {
	alarmWrapper: {
		margin: 10,
		padding: 10,
		border: "solid 1px black",
	},
	messageText: {
		color: "navy",
		fontSize: 16,
	},
};

// 클래스 방식의 리액트 컴포넌트
class Alarm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(`알람${this.props.id}의 componentDidMount() 호출됨`);
	}

	componentDidUpdate() {
		console.log(`알람${this.props.id}의 componentDidUpdate() 호출됨`);
	}

	componentWillUnmount() {
		console.log(`알람${this.props.id}의 componentWillUnmount() 호출됨`);
	}

	// render() 메서드를 오버라이드 해서 엘리먼트를 화면에 그린다
	render() {
		return (
			<div style={styles.alarmWrapper}>
				<span style={styles.messageText}>{this.props.message}</span>
			</div>
		);
	}
}

export default Alarm;
