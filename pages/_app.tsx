import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout fonts={inter}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
