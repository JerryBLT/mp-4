import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "CS391 MP4",
  description: "This app showcase the Harvard Museam API",
};

export default function RootLayout(
  {children,}: 
  Readonly<{children: React.ReactNode;}>
){
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
