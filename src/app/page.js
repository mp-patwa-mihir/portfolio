'use client';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/hero"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
