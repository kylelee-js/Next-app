import Link from "next/link";
import Desc from "./Desc";
import { useEffect, useState } from "react";

export default function Modal({ movie }) {
	// let [isHover, setIsHover] = useState(false);
	let [display, setDisplay] = useState({ display: "none" });
	// const onMouseOver = (event) => {
	// 	// 시간 후에 되는게 아니라 호버링 기준으로 바꿔야한다....
	// 	// 일정 시간 이상 머물러야지 실행되도록 바꾸기
	// 	setIsHover((prev) => !prev);
	// };
	// const onMouseOut = (event) => {
	// 	setIsHover((prev) => !prev);
	// };
	return (
		<div
			className='container'
			onMouseOver={(e) => {
				setDisplay({ display: "block" });
			}}
			onMouseOut={(e) => {
				setDisplay({ display: "none" });
			}}>
			<div key={movie.id} className='movie'>
				<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

				<div style={display}>
					<Desc movie={movie} />
				</div>
			</div>
			<style jsx>{`
				.movie {
					position: relative;
					flex-grow: 1;
					max-width: 25vw;
					margin: 10px;
					gap: 20px;
					transition: all 0.2s ease-in-out;
				}
				.movie:hover {
					transform: scale(1.3) translateY(-10px);
					/* border-bottom-left-radius: 0;
					boModule not found: Can't resolve 'fs'rder-bottom-right-radius: 0; */
				}
				.movie:hover img {
					box-shadow: 0px 0px 5px 5px #111;
				}
				.movie > img {
					max-width: 15vw;
					border-radius: 15px;
					transition: all 0.2s ease-in-out;
				}
			`}</style>
		</div>
	);
}
