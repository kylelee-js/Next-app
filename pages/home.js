import Image from "next/image";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";

export default function Home({ results }) {
	results.length / 6;

	const onClick = (event) => {
		let $movieContainer = event.target.parentElement.parentElement;
		$movieContainer.animate([{ maginLeft: -250 }, { duration: 400 }]);
	};

	return (
		<div className='container'>
			<SEO title='Home' />
			<div className='title'>
				<h1>Top 10 Movies</h1>
			</div>

			<div className='movie-container'>
				<span className='handlePrev' onClick={onClick}>
					<b className='prev-icon'>B</b>
				</span>
				{results?.map((movie) => (
					<div key={movie.id} className='movie'>
						<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
						{/* <h4>{movie.original_title}</h4> */}
					</div>
				))}
				<span className='handleNext' onClick={onClick}>
					<b className='next-icon'>N</b>
				</span>
			</div>

			<style jsx>{`
				.container {
					padding-bottom: 50vh;
				}
				.previus {
					padding-right: 5px;
					padding-left: 5px;
				}
				.title {
					padding: 10px;
					margin: 10px;
				}
				.movie-container {
					display: flex;
					padding-top: 20px;
					align-items: center;
					justify-contents: center;
					overflow: hidden; 
					transition: transform 0.3s ease-in-out;
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
					position: fixed;
    			bottom: 0px;
    			right: 0px; 
				}
				.handlePrev {
					position: fixed;
					width: 4%;
					background-color: white;
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
