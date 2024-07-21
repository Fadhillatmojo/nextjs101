import Link from "next/link";
export default function F4() {
	return (
		<>
			<h1>F4 Folder</h1>
			<Link href="/f1/f3">Redirect to F3</Link> 
			{/* this link will not redirected to original f3 folder, but will redirected to intercepted route inside (..)f3 folder */}
			<br />
			<Link href="/about">Redirect to About</Link>
			{/* this link will not redirected to original about, but will redirected to intercepted route inside (...)about folder */}

		</>
	);
}