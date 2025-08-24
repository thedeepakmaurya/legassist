import "./globals.css";
import { Urbanist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "remixicon/fonts/remixicon.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Legal Assistant",
  description: "AI-powered legal assistance for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
