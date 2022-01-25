import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
	const router = useRouter();

	return (
		<nav>
			<div className='nav'>
				<img src='/vercel.svg' className='logo' />
				<Link href='/home'>
					<a className={router.pathname == "/home" ? "active" : ""}>Home</a>
				</Link>
				<Link href='/'>
					<a className={router.pathname == "/about" ? "active" : ""}>About</a>
				</Link>
				<Link href='/'>
					<a className={router.pathname == "/" ? "active" : ""}>Contact</a>
				</Link>
			</div>

			<style jsx>{`
				.logo {
					background-color: white;
					padding: 10px;
					margin-right: 30px;
					border-radius: 10px;
				}
				.nav {
					display: flex;
					gap: 10px;
					justify-content: start;
					align-items: center;
					background-color: linear-gradient(black 50%, #141414);
					color: white;
					padding: 10px;

					font-weight: 600;
				}
				.active {
					padding: 10px;
					border-radius: 10px;
					background-color: orange;
					color: black;
				}
			`}</style>
		</nav>
	);
}
