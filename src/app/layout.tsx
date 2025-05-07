// src/app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.scss";
import BootstrapClient from "@components/BootstrapClient";
import Topbar from "@/components/topbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import LenisScroll from "@/components/LenisScroll"; // Import the new LenisScroll
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "da360",
  description: "Next.js + Bootstrap App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {/* <LenisScroll /> */}
        <BootstrapClient />
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
