/**
 * @fileOverview Header component for the portfolio website.
 * @module Header
 * @requires React
 * @requires './header.style'
 * @requires 'antd'
 */

'use client'
import React, { memo } from 'react'
import { Col, Row } from 'antd'
import dynamic from 'next/dynamic'

const HeaderWrapper = dynamic(() => import('./header.style'), {
    ssr: false,
})

/**
 * Header functional component.
 * @component
 * @example
 * import Header from './Header';
 * <Header />
 */

const Header = () => {

    /**
  * Array of sections to be displayed in the header menu.
  * @type {Array}
  */

    const sections = [{
        title: 'About',
        key: 1,
    },
    {
        title: 'Projects',
        key: 2,
    },
    {
        title: 'Contact',
        key: 3,
    }];

    /**
 * Render the Header component.
 * @returns {JSX.Element} JSX for the Header component.
 */

    return (
        <HeaderWrapper>
            <Row className='header_main_row'>
                <Col xs={6} className='logo_col'><a className='title'>Portfolio</a></Col>
                <Col xs={18} className='menu_col'>
                    {sections?.map((item) => (
                        <a className='text' key={item?.key}>
                            {item?.title}
                        </a>
                    ))}
                </Col>
            </Row>
        </HeaderWrapper>
    )
}

export default memo(Header)