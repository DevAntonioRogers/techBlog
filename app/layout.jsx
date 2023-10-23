import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Tech Pulse",
  description: "Tech Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 dark:bg-medium overflow-x-hiddens`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
