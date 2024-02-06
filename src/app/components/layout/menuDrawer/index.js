import React, { memo } from 'react';
import { Drawer } from 'antd';
import { Typography } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { UpSquareOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';

// Dynamic import for improved code splitting
const MenuDrawerWrapper = dynamic(() => import('./menuWrappwe.style'), {
    ssr: false,
});

/**
 * Responsive menu drawer component.
 *
 * This component renders a drawer containing a list of sections, allowing users to navigate between different sections.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Indicates whether the drawer is open.
 * @param {Function} props.onClose - Function to handle the drawer close event.
 * @param {Object[]} props.sections - Array of section objects containing title, key, and path.
 * @returns {React.Element} The rendered menu drawer.
 * @example
 */
const MenuDrawer = ({ open, onClose, sections }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Drawer
            className='menu_drawer'
            closable={false}
            footer={false}
            placement='top'
            onClose={onClose}
            open={open}
            style={{ background: '#1d1d1e', borderRadius: '0rem 0rem 10rem 10rem' }}
        >
            <MenuDrawerWrapper>
                <div className='close_btn'>
                    <UpSquareOutlined size={24} onClick={onClose} />
                </div>
                <div className='text_div'>
                    {sections?.map((item) => (
                        <Typography.Text
                            className='text'
                            key={item?.key}
                            onClick={() => {
                                onClose();
                                if (pathname !== item.path) {
                                    if (item.path !== '/contact') {
                                        router.push(item.path)
                                    }
                                    // else {
                                    //     const email = 'mailto:patwamihir2@gmail.com';
                                    //     router.push(email);
                                    // }
                                }
                            }}
                        >
                            {item?.title}
                        </Typography.Text>
                    ))}
                </div>
            </MenuDrawerWrapper>
        </Drawer>
    );
};

export default memo(MenuDrawer);
