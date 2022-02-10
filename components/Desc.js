import Link from "next/link";

export default function Desc({ movie }) {
	return (
		<div className='desc-container'>
			{/* <Link href='/'>
				<img src={`https://image.tmdb.org/t/p/w500/${movie.id}`} />
			</Link> */}
			<div className='btn-container'>
				<button className='play'>재생</button>
				<button className='like'>좋아요</button>
				<button className='dislike'>싫어요</button>
				<button className='add'>추가</button>
			</div>
			<b>{movie.title}</b>

			<div className='description'>{movie.overview}</div>
			<div className='genre'>
				<span>장르 설명 : {movie.genre_ids.join(" ")}</span>
			</div>
			<style jsx>{`
				.desc-container {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, 0%);
					margin: 0;
					padding: 0;
					height: 50%;
					width: 100%;
					background-color: black;
					border-radius: 0 0 10px 10px;
					font-size: 0.8rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			`}</style>
		</div>
	);
}
