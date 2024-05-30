import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Imanuel Raditya | Portfolio",
  description: "Imanuel Raditya's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defailtTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
