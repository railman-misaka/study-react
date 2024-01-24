"use client";
import { Header } from "@/src/components/Header";
import { Posts } from "@/src/components/Posts";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
