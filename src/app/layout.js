import "./globals.css";

export const metadata = {
  title:
    "Appniche Technology",
  description:
    "Appniche Technology is a startup agency that specializes in web and mobile app development. We build scalable, secure, and high-quality web and mobile applications for startups and enterprises.",
  keywords:
    "startup agency, web development, mobile app development, startup, tech, web development company, mobile app development company, software development, web design, mobile app design, full stack development, frontend development, backend development, react, nextjs, nodejs, express, mongodb, mysql, postgresql, typescript, javascript, html, css, tailwindcss, lucide-react, ",
  author: "Appniche Technology",
  creator: "Appniche Technology",
  publisher: "Appniche Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased body`}>{children}</body>
    </html>
  );
}
