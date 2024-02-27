import React from "react";
import Ingredient from "./Ingredient";
import Recipe from "./Recipe";

const ingredients = [
	{ name: "연어" },
	{ name: "잣" },
	{ name: "버터 상추" },
	{ name: "옐로 스쿼시(Yellow Squash, 호박의 한 종류)" },
	{ name: "올리브 오일" },
	{ name: "마늘" },
];

const recipes = [
	{ comment: "오븐을 350도로 예열한다." },
	{ comment: "유리 베이킹 그릇에 올리브 오일을 두른다." },
	{ comment: "연어, 마늘, 잣을 그릇에 담는다." },
	{ comment: "오븐에서 15분간 익힌다." },
	{ comment: "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다." },
	{ comment: "오븐에서 그릇을 꺼내서 15분간 식힌다음에 상추를 곁들여서 내놓는다." },
];

export default function Baked(props) {
	return (
		<div>
			<h2>맛있는 조리법</h2>
			<p>Baked Salmon</p>
			<ul>
				{ingredients.map((ingredient) => {
					return <Ingredient name={ingredient.name} />;
				})}
			</ul>
			<h2>조리 절차</h2>
			<div>
				{recipes.map((recipe) => {
					return <Recipe recipe={recipe.comment} />;
				})}
			</div>
		</div>
	);
}
