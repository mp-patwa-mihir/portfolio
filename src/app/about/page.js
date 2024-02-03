'use client';

import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/about/index"), {
    ssr: false
});

const StatisticComp = dynamic(() => import("../components/statistic/index"), {
    ssr: false
});

const AboutPage = () => {
    return (
        <>
            <About />
            <StatisticComp />
        </>
    )
}

export default AboutPage