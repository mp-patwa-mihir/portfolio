'use client'

/**
 * PreLoader component to display a loading animation using framer-motion.
 *
 * @component
 * @example
 * // Usage in a Next.js component
 * <PreLoader />
 *
 * @returns {React.Element} The PreLoader component.
 */

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { memo } from 'react';

/**
 * @function
 * PreLoader functional component.
 *
 * @returns {React.Element} The rendered PreLoader component.
 */

const PreLoader = () => {
    /**
 * The current pathname using the Next.js `usePathname` hook.
 *
 * @type {string}
 */
    const pathname = usePathname()

    return (
        <>
            {/* Left-to-right animation */}
            <motion.div
                initial={{ opacity: 1, x: window.innerWidth, background: '#c084fc', }}
                animate={{ opacity: 1, x: [window.innerWidth, 0, -window.innerWidth], background: '#c084fc', }}
                transition={{
                    duration: 2, type: 'keyframes'
                }}
                key={pathname}
                style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: 100 }}
            />
            {/* Right-to-left animation */}
            <motion.div
                initial={{ opacity: 1, x: -window.innerWidth, background: '#db2777', }}
                animate={{ opacity: 1, x: [-window.innerWidth, 0, window.innerWidth], background: '#db2777', }}
                transition={{
                    duration: 2, type: 'keyframes',
                }}
                key={pathname}
                style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: 100 }}
            />
        </>
    )
};

export default memo(PreLoader);