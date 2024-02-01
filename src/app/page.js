'use client';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
const StatisticComp = dynamic(() => import("./components/statistic"), { ssr: false });
const About = dynamic(() => import("./components/about"), { ssr: false });


export default function Home() {
  return (
    <div>
      <Hero />
      <StatisticComp />
      <About />
    </div>
  );
}
