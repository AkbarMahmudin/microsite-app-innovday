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
    text: "Akan segera tayang dalam",
    cta: {
      label: "Tonton Sekarang",
      href: "/",
    },
    startDate: new Date("2023-11-16 14:40:00"),
  };

  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar data={useNavData()} announcement={announcement} />

        <main
          className={`flex flex-col gap-3 ${
            announcement ? "md:pt-40 pt-32" : "md:pt-24 pt-14"
          } pb-24`}
        >
          {children}
        </main>
        
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
