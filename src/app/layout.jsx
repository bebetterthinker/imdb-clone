import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB CLONE",
  description: "This is the imdb clone website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {/* header section*/}
          <Header />
          {/*Navbar section*/}
          {/*Search section */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
