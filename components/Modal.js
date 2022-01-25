import Link from "next/link";

export default function Modal({ movie }) {
	return (
		<div className='container'>
      <Link href={}>
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
				<span>{movie.genre}</span>
			</div>

			<style jsx>{``}</style>
		</div>
	);
}
