import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// mock data
import { CONTACTS, SOCIAL_MEDIA } from "@/_mock";

import { useNavData } from "./config-navigation";

// components
import { Navbar } from "@/components/nav/";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Innovation Day",
  description: "Innovation Day 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ourProgram = useNavData()
    .filter((navItem) => navItem.title === "Our Events")
    .map((navItem) => navItem.children)[0] as any;

  const navData = {
    menu: useNavData(),
    ourProgram,
  };

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar data={useNavData()} />
        {children}
        <Footer
          navData={navData as any}
          contact={CONTACTS}
          social={SOCIAL_MEDIA}
        />
      </body>
    </html>
  );
}
