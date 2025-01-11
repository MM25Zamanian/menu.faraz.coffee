import Image from "next/image";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import __metadata from "./__metadata";
import GecutLogo from "~/gecut.webp";
import ProjectLogo from "~/logo.webp";
import { Icon } from "@iconify/react";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata = __metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-screen-safe w-screen bg-base-100">
      <body
        className={`${vazirmatn.className} antialiased size-full flex flex-col overflow-hidden bg-transparent`}
      >
        <div className="bg-base-300 w-full">
          <div className="navbar max-w-sm mx-auto w-full overflow-hidden">
            <span className="navbar-start"></span>
            <button className="btn btn-ghost text-xl navbar-center text-base-content">
              <Image
                src={ProjectLogo}
                alt="Faraz Coffee Logo"
                width="22"
                height="22"
                priority
              />
              فراز کافه
            </button>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-square text-2xl text-base-content" title="مکان ما">
                <Icon icon="solar:map-point-bold-duotone" />
              </button>
            </div>
          </div>
        </div>

        <main className="flex flex-col flex-1 max-w-sm mx-auto w-full overflow-hidden">
          {children}
        </main>

        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p className="flex gap-2 items-center justify-center text-green-500">
              توسعه یافته توسط جیکات
              <Image
                src={GecutLogo}
                alt="Gecut Logo"
                width="12"
                height="12"
                quality="100"
                priority
              />
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
