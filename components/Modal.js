import Link from "next/link";
import Desc from "./Desc";
import { useEffect, useState } from "react";

export default function Modal({ movie }) {
	let [isHover, setIsHover] = useState(false);
	const onMouseOver = (event) => {
		// 시간 후에 되는게 아니라 호버링 기준으로 바꿔야한다....
		// 일정 시간 이상 머물러야지 실행되도록 바꾸기
		setIsHover((prev) => !prev);
		// setTimeout(() => {
		// 	setIsHover((prev) => !prev);
		// }, 500);
	};
	const onMouseOut = (event) => {
		setIsHover((prev) => !prev);
		// setTimeout(() => {
		// 	setIsHover((prev) => !prev);
		// }, 200);
	};
	return (
		<div
			className='container'
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}>
			<div key={movie.id} className='movie'>
				<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
				{isHover && <Desc movie={movie} />}
			</div>
			<style jsx>{`
					.movie {
						position: relative;
						flex-grow: 1;
						max-width: 20vw;
						padding: 10px;
						gap: 20px;
					}
					.movie:hover img {
						transform: scale(1.5) translateY(-10px);
						border-bottom-left-radius: 0;
						border-bottom-right-radius: 0;
					}
					.movie > img {
						max-width: 15vw;
						padding 20px;
						border-radius: 12px;
						transition: all 0.2s ease-in-out;
					}
					.hidden {
						display: none;
					}
				`}</style>
		</div>
	);
}
