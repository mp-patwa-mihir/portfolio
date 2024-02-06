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

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { memo } from 'react';

/**
 * @function
 * PreLoader functional component.
 *
 * @returns {React.Element} The rendered PreLoader component.
 */

const PreLoader = ({ children }) => {
    /**
 * The current pathname using the Next.js `usePathname` hook.
 *
 * @type {string}
 */
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial='initialState'
                animate='animateState'
                exit='exitState'
                transition={{
                    duration: 0.75
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    },
                    exitState: {
                        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                    }
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence >
    )
};

export default memo(PreLoader);