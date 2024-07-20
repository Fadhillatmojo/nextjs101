"use client";
// error boundary must be a client components in next js
export default function ErrorBoundary({ error, reset }: {
	error: Error;
	reset: () => void;
	// reset function is usefull to try again to re render the error boundaries content (re render page.tsx in reviewid)
}) {
	return (
		<>
			<h1>{error.message}</h1> <br />
			<button onClick={reset}>Try Again</button>
		</>
	);
}

