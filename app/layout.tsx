import Sidebar from "@/components/side-bar/side-bar";
import "../asset/css/common.css";
import "../asset/css/color-1.css";
import "../asset/css/libs/css/all.min.css";
import { Inter } from "next/font/google";
import CursorFollower from "@/components/cursor-follower/cursor-follower";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className + ""}>
				<div className="main-container">
					<Sidebar />
					{children}
					<CursorFollower />
				</div>
			</body>
		</html>
	);
}
