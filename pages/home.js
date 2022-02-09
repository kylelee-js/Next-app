import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import SEO from "../components/SEO";

export default function Home({ results }) {
	// Click to slide carousel left

	let counter = 0;
	const onClick = (event) => {
		counter++;
		if (counter * 5 >= results.length) {
			counter = 0;
		}

		let $movieContainer = document.querySelector(".movie-container");
		$movieContainer.style.marginLeft = `-${counter * 9}0%`;
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
					<Modal key={movie.id} movie={movie} />
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
					padding-left: 20px;
					transition: all 0.3s ease-in-out;
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
