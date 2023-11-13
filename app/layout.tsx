import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// mock data
import { CONTACTS, SOCIAL_MEDIA } from "@/_mock";

import { useNavData } from "./config-navigation";

// components
import { Navbar } from "@/components/custom/nav";
import { Footer } from "@/components/custom/footer";
import { Toaster } from "@/components/ui/toaster";

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

  const announcement = {
    text: "Innovation Day akan segera tayang dalam",
    cta: {
      label: "Tonton Sekarang",
      href: "/",
    },
    startDate: new Date("2023-11-11 14:40:00"),
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
        <Toaster />
      </body>
    </html>
  );
}
