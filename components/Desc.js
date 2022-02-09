import Link from "next/link";

export default function Desc({ movie }) {
	return (
		<div className='desc-container'>
			<Link href='/'>
				<img src={`https://image.tmdb.org/t/p/w500/${movie.id}`} />
			</Link>

			<div className='btn-container'>
				<button className='play'>재생</button>
				<button className='like'>좋아요</button>
				<button className='dislike'>싫어요</button>
				<button className='add'>추가</button>
			</div>
			<div className='description'>영화 설명</div>
			<div className='genre'>
				장르 설명
				<span>{movie.id}</span>
			</div>
			<style jsx>{`
				.desc-container {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					margin: 0;
					padding: 0;
					height: 150px;
					width: inherit;
					background-color: black;
					border: 1px;
					border-style: solid;
					border-radius: 0 0 10px 10px;
				}
			`}</style>
		</div>
	);
}
