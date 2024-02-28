import React from "react";
import Alarm from "./Alarm";

const reservedAlrams = [
	{
		id: 1,
		message: "[알림]메시지가 도착했습니다",
	},
	{
		id: 2,
		message: "[기기 로그인 알림]",
	},
	{
		id: 3,
		message: "[픽업완료] 꿀 커피 외 1개",
	},
];

let timer;
let currentAlarmIndex = 0;

const nextAlarm = () => reservedAlrams[currentAlarmIndex++ % reservedAlrams.length];

export default class AlarmList extends React.Component {
	constructor(props) {
		super(props);
		// 일반 멤버 변수로 선언
		this.alarms = [];

		// state로 변수 선언
		// state 내부에 선언되어 있는 변수를 setState()메서드로 수정할떄마다 해당 컴포넌트의 render()가 자동으로 호출되게끔 설계되어있다
		this.state = {
			alarm: nextAlarm(),
			alarms: [],
		};
	}

	componentDidMount() {
		// let alarms = this.state.alarms;

		timer = setInterval(() => {
			// if (alarms.length < reservedAlrams.length) {
			// 	const index = alarms.length;
			// 	alarms.push(reservedAlrams[index]);

			// 	// setState()로 state를 갱신해주면 render가 호출 된다
			// 	this.setState({
			// 		alarms: alarms,
			// 	});

			// 	console.log(`${index}번째 알람 추가`);
			// } else {
			// 	// console.log("모든 알람이 출력되었습니다.", alarms);
			// 	// clearInterval(timer);
			// }

			// 순환 알림
			// 객체를 전달해서 업데이트하는 setState()
			// this.setState({
			// 	alarm: reservedAlrams[++currentAlarmIndex % reservedAlrams.length],
			// });

			// 함수를 전달해서 업데이트하는 setState()
			this.setState((state) => ({ alarm: nextAlarm() }));
		}, 1500);
	}

	componentWillUnmount() {
		if (timer) {
			clearInterval(timer);
		}
	}

	render() {
		return (
			<div>
				<Alarm id={this.state.alarm.id} message={this.state.alarm.message} />

				{/* {this.state.alarms.map((alarm) => {
					return <Alarm id={alarm.id} message={alarm.message} />;
				})} */}

				{/* <Alarm message="[알림]메시지가 도착했습니다" />
				<Alarm message="[기기 로그인 알림]" />
				<Alarm message="[픽업완료] 꿀 커피 외 1개" /> */}
			</div>
		);
	}
}
