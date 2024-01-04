import { Montserrat } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@/context/TemeContext";

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900", "700"],
});

export const metadata = {
  title: "SIDSHOP",
  description: "Discover Your devices with our shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        {/* <ThemeProvider> */}
        <div className="container">
          <NavBar />

          {children}

          <Footer />
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
