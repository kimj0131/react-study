// 자바스크립트 영역이기 떄문에 font-size가 아니라 fontSize로 사용해야 한다 (카멜케이스로 사용해야 한다)
const styles = {
	profileWrapper: {
		display: "flex",
		flexDirection: "row",
		margin: 10,
		padding: 10,
		border: "solid 1px black",
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 20,
	},
	introContainer: {
		display: "flex",
		flexDirection: "column",
	},
	nameText: {
		color: "green",
		fontSize: 15,
		fontWeight: "bold",
	},
	genderText: {
		color: "gray",
		fontSize: 13,
	},
	commentText: {
		color: "black",
		fontSize: 13,
	},
};

function Profile(props) {
	return (
		<div style={styles.profileWrapper}>
			<div>
				<img
					src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/L5UV5eFyTS1Ar4MTDDOd_Ynrzt4"
					alt=""
					style={styles.image}
				/>
			</div>
			<div style={styles.introContainer}>
				<span style={styles.nameText}>
					{props.name}({props.age})
				</span>
				<span style={styles.genderText}>{props.gender}</span>
				<span style={styles.commentText}>{props.comment}</span>
			</div>
		</div>
	);
}

export default Profile;
