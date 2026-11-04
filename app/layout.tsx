import React from "react";
import Header from "../components/Header";

//the layout for the entire application
//children is the page.tsx of the current route, all pages share the same html and body
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
          <Header/>
          {children}
      </body>
    </html>
  );
}
