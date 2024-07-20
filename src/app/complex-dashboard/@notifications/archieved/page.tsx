import Card from "@/components/card";
import Link from "next/link";

export default function ArchievedNotifications() {
	return (
		<Card>
			<div>Archieved Notifications</div>
			<br />
			<Link href="/complex-dashboard">Default</Link>
		</Card>
	);
}