import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Legal Assistant",
  description: "AI-powered legal assistance for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mPlus.className}>{children}</body>
    </html>
  );
}
