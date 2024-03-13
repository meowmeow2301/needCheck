
'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '@/components/app.header'
import AppFooter from '@/components/app.footer';
import Container  from 'react-bootstrap/Container';
import AppTable from "@/components/app.table";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader/>
        <Container>
          {children}
        </Container>
        <AppFooter/>
        </body>
    </html>
  );
}
