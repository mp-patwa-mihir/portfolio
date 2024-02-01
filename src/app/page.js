'use client';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
const StatisticComp = dynamic(() => import("./components/statistic"), { ssr: false });


export default function Home() {
  return (
    <div>
      <Hero />
      <StatisticComp />
    </div>
  );
}
