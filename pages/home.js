import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import SEO from "../components/SEO";

export default function Home({ results }) {
	// Click to slide carousel left
	let [isHover, setIsHover] = useState(false);
	let counter = 0;
	const onClick = (event) => {
		counter++;
		if (counter * 5 >= results.length) {
			counter = 0;
		}

		let $movieContainer = document.querySelector(".movie-container");
		$movieContainer.style.marginLeft = `-${counter * 9}0%`;
	};

	const onMouseOver = (event) => {
		// 시간 후에 되는게 아니라 호버링 기준으로 바꿔야한다....
		setTimeout(() => {
			setIsHover((prev) => !prev);
			console.log(event.target);
		}, 700);
	};

	return (
		<div className='container'>
			<SEO title='Home' />
			<div className='title'>
				<h1>Top 10 Movies</h1>
				<span className='handlePrev' onClick={onClick}>
					<b className='prev-icon'>Next Button</b>
				</span>

				{/* <span className='handleNext' onClick={onClick}>
					<b className='next-icon'>N</b>
				</span> */}
			</div>

			<div className='movie-container'>
				{results?.map((movie) => (
					<div key={movie.id} className='movie' onMouseOver={onMouseOver}>
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
						{isHover & <Modal movie={movie} />}
					</div>
				))}
			</div>

			<style jsx>{`
				.container {
					padding-bottom: 50vh;
					overflow: hidden; 
				}
				.previus {
					padding-right: 5px;
					padding-left: 5px;
				}
				.title {
					padding: 10px;
					margin: 10px;
					gap: 10px;
				}


				.movie-container {
					display: flex;
					padding-top: 20px;
					padding-left: 10px;
					transition: all 0.3s ease-in-out;
				}

				.movie {
					flex-grow: 1;
					max-width: 20vw;
					padding: 10px;
					gap: 20px;
				}

				.movie:hover img {
					transform: scale(1.1) translateY(-10px);
				}
				.movie img {
					max-width: 15vw;
					padding 20px;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
				}
				.movie h4 {
					font-size: 20%;
					text-align: center;
				}

				.handleNext {
					width: 4%;
					background-color: white;
					color: black;
				}
				.handlePrev {
					width: 4%;
					background-color: white;
					color: black;
					border-radius: 5px;
					padding: 5px;
					box-shadow: 3px 3px 8px #888888;
				}
				.hidden {
					display: none;
				}
			`}</style>
		</div>
	);
}

// only runs in serverside
export async function getServerSideProps() {
	const { results } = await (
		await fetch("http://127.0.0.1:3000/api/movies")
	).json();

	return {
		props: {
			results,
		},
	};
}
