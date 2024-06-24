import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import NavMenu from "./components/NavMenu";

export const metadata = {
  title: "notebook",
  description: "write notes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col items-center justify-end bg-black text-white">
        {children}
        <NavMenu />
      </body>
    </html>
  );
}
