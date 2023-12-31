import Header from "@/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/layouts/Footer";
import Providers from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Providers>
				<body className={inter.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</Providers>
		</html>
	);
}
