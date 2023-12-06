import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// mock data
import { CONTACTS, SOCIAL_MEDIA } from "@/_mock";

// components
import { Navbar } from "@/components/custom/nav";
import { Footer } from "@/components/custom/footer";
import { Toaster } from "@/components/ui/toaster";

// hooks
import { useNavData } from "@/hooks/useNavData";

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
  const ourProgram = [] as any;
  // const ourProgram = useNavData()
  //   .filter((navItem) => navItem.title === "Our Events")
  //   .map((navItem) => navItem.children)[0] as any;

  const navData = {
    menu: useNavData(),
    ourProgram,
  };

  const announcement = {
    text: "Townhall DB Q4 2023",
    cta: {
      label: "Tonton Sekarang",
      href: "/townhall-db-q4-2023",
    },
    startDate: new Date("2023-12-13 13:00:00"),
  };

  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar announcement={announcement} />

        <main
          className={`flex flex-col gap-3 pb-24`}
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
