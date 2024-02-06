'use client';

import { Typography } from "antd";
import { motion } from 'framer-motion';

const { Text } = Typography;

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.75,
                duration: 0.75,
            }}
        >
            <Text className="text">
                Comming Soon .....
            </Text>
        </motion.div>
    )
}

export default ProjectsPage;