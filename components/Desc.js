import Link from "next/link";

export default function Desc({ movie }) {
	return (
		<div className='desc-container'>
			<Link href='/'>
				<img src={`https://image.tmdb.org/t/p/w500/${movie.id}`} />
			</Link>

			<div className='btn-container'>
				<button className='play'></button>
				<button className='like'></button>
				<button className='dislike'></button>
				<button className='add'></button>
			</div>
			<div className='description'></div>
			<div className='genre'>
				<span>{movie.id}</span>
			</div>
			<style jsx>{`
				.desc-container {
					height: 200px;
					width: inherit;
					background-color: black;
					border: 1px;
					border-style: solid;
					border-radius: 10px;
				}
			`}</style>
		</div>
	);
}
