"use client";
// all react components are server components by default, although hooks can only use in client components, so we must use client.
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";


const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	return (
		<div>
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