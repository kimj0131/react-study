import React from "react";
import Profile from "./Profile";

// 데이터를 받아왔다고 가정
const profiles = [
	{
		name: "강호동",
		age: 50,
		gender: "남자",
		comment: "환영합니다! 1박2일!!",
	},
	{
		name: "유재석",
		age: 49,
		gender: "남자",
		comment: "무한도전!!",
	},
];

// 받아온 데이터를 활용하여 반복문으로 컴포넌트 구성해보기
function ProfileList(props) {
	return (
		<div>
			{profiles.map((profile) => {
				return (
					<Profile name={profile.name} age={profile.age} gender={profile.gender} comment={profile.comment} />
				);
			})}
		</div>
	);
}

ProfileList.propTypes = {};

export default ProfileList;
