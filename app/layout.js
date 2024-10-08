import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  // title: 'McActive',
  title: {
    template: "%s: McWindusurf",
    default: "Welcome: McWindsurf",
  },
  description:
   "Windsurfing: The Way of Life is a unique application designed to help us stay fit through windsurfing and SUP activities, without overdoing it. The app allows us to easily record and track our sessions while also managing our ocean equipment inventory."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col relative`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
        {/* <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        /> */}
      </body>
    </html>
  );
}
