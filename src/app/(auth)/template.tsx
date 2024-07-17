"use client";
// all react components are server components by default, although hooks can only use in client components, so we must use client.
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

// the different between layout and template is that when the route is change, template.tsx will re render the components, re render the state value, and so on. on the other side, layout.tsx doesnt. 
export default function AuthLayout({ children }: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	const [input, setInput] = useState("");
	return (
		<div>
			<div>
				<input type="text" value={input} onChange={e => setInput(e.target.value)} />
			</div>
			========== <br />
			{navLinks.map((link) => {
				const isActive = pathName.startsWith(link.href);
				return (
					<>
						<Link href={link.href} key={link.name} className={isActive ? "font-bold" : ""}>
							{link.name}
						</Link>
						<br />
					</>
				);
			})}
			========== <br />
			{children}
		</div>
	);
}