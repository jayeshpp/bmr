import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";
import { Layout } from "@/components/Layout";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bangalore Malayali Riders",
  description: "Grasp life by the handlebars",
  keywords: ["BMR", "Riders", "Motor Bike", "Brotherhood"],
  authors: [
    {
      name: "Jayesh",
      url: "https://jayeshpp.github.io/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark`}
      >
        <AuthProvider>
          <Layout>
            <main className="p-5">
              <div className="container m-auto">
                <div className="max-w-[800px] m-auto">{children}</div>
              </div>
            </main>
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
