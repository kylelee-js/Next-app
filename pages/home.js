import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import SEO from "../components/SEO";

export default function Home({ results }) {
	// Click to slide carousel left
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies(results.slice(0, 10));
	}, []);

	let counter = 0;
	const onClick = (event) => {
		counter++;
		if (counter * 5 >= movies.length) {
			counter = 0;
		}

		// setMovies(results.slice(counter * 5, counter * 5 + 5));
		let $movieContainer = document.querySelector(".movie-container");

		// 새로운 방식으로 업데이트!
		$movieContainer.style.marginLeft = `-${counter * 10}0%`;
	};

	return (
		<div className='container'>
			<SEO title='Home' />
			<div className='title'>
				<h1>Top 10 Movies</h1>
				<span className='handlePrev' onClick={onClick}>
					<b className='prev-icon'>Next Button</b>
				</span>
			</div>

			<div className='movie-container'>
				{movies?.map((movie) => (
					<Modal key={movie.id} movie={movie} />
				))}
			</div>

			<style jsx>{`
				.container {
					padding-bottom: 50vh;
					overflow: hidden;
					width: 100vw;
				}
				.title {
					padding: 10px;
					margin: 10px;
					gap: 10px;
				}

				/* .movie-container {
					margin: 0;
					display: flex;
					padding-top: 20px;
					padding-left: 20px;
					transition: all 0.3s ease-in-out;
				} */

				.movie-container {
					display: grid;
					/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
					grid-auto-flow: column;
					grid-template-columns: repeat(5, auto);
					width: 100%;
					transition: all 0.3s ease-in-out;
				}

				.handlePrev {
					width: 4%;
					background-color: white;
					color: black;
					border-radius: 5px;
					padding: 5px;
					box-shadow: 3px 3px 8px #888888;
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
