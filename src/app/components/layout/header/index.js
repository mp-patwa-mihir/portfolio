/**
 * @fileOverview Header component for the portfolio website.
 * @module Header
 * @requires React
 * @requires './header.style'
 * @requires 'antd'
 */

'use client';

import React, { memo, useState } from 'react';
import { Button, Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MenuDrawer from '../menuDrawer/index';
import { useRouter } from 'next/navigation';

const HeaderWrapper = dynamic(() => import('./header.style'), {
    ssr: false,
});

/**
 * Functional component representing the header of the portfolio website.
 * @component
 * @example
 * import Header from './Header';
 * <Header />
 */

const Header = () => {
    const router = useRouter();
    const [menuModal, setMenuModal] = useState(false);

    /**
     * Array of sections to be displayed in the header menu.
     * @type {Array.<{title: string, key: number, path: string}>}
     */
    const sections = [
        {
            title: 'About',
            key: 1,
            path: '/about',
        },
        {
            title: 'Projects',
            key: 2,
            path: '/projects',
        },
        {
            title: 'Contact',
            key: 3,
            path: '/contact',
        }
    ];

    /**
     * Render the Header component.
     * @returns {JSX.Element} JSX for the Header component.
     */
    return (
        <HeaderWrapper>
            <Row className='header_main_row' justify='space-between'>
                <Col className='logo_col'>
                    <Typography.Text className='title' onClick={() => router.push('/')}>
                        Portfolio
                    </Typography.Text>
                </Col>
                <Col className='menu_col'>
                    {sections?.map((item) => (
                        <Button className='glow-on-hover' key={item?.key} onClick={() => router.push(item.path)}>
                            {item?.title}
                        </Button>
                    ))}
                </Col>
                <Col xs={4} md={0} className='menu_col_res'>
                    <MenuOutlined size={24} onClick={() => setMenuModal(true)} />
                </Col>
            </Row>
            <MenuDrawer open={menuModal} onClose={() => setMenuModal(false)} sections={sections} />
        </HeaderWrapper>
    );
};

export default memo(Header);
