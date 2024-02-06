'use client';

import dynamic from "next/dynamic";
import { motion } from 'framer-motion';

const About = dynamic(() => import("../components/about/index"), {
    ssr: false
});

const StatisticComp = dynamic(() => import("../components/statistic/index"), {
    ssr: false
});

const AboutPage = () => {
    return (
        <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.75,
                duration: 0.75,
            }}
        >
            <About />
            <StatisticComp />
        </motion.div>
    )
}

export default AboutPage