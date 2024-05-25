import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appniche Technologies",
  description: "Created by Appniche Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className,` w-[80%] mx-auto h-full dark:bg-slate-950 dark:text-white`]}>{children}</body>
    </html>
  );
}
