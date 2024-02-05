import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/header";
// import Footer from "@/libs/components/Footer/Footer";

import styles from "./page.module.scss";


const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}