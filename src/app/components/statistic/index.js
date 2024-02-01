/**
 * React component for rendering statistics.
 * @module StatisticComp
 * @return {JSX.Element} The rendered React element.
 */

import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { Col, Row } from 'antd';
import { Typography } from 'antd';


/**
 * Dynamic import of the StatisticStyleWrapper component.
 * @type {import('react').ComponentType}
 */

const StatisticStyleWrapper = dynamic(() => import('./statistic.style'), {
    ssr: false,
});

/**
 * Functional component representing the statistics display.
 * @function
 * @returns {JSX.Element} The rendered React element.
 */

const StatisticComp = () => {
    return (
        <StatisticStyleWrapper>
            <Row className='stat_main_row'>
                <div className='main_col_div'>
                    <Col xs={12} className='stat_col'>
                        <Typography.Text className='text'>3</Typography.Text>
                        <Typography.Text className='title'>Projects</Typography.Text>
                    </Col>
                    <Col xs={12} className='stat_col'>
                        <Typography.Text className='text'>1 +</Typography.Text>
                        <Typography.Text className='title'>Years</Typography.Text>
                    </Col>
                </div>
            </Row>
        </StatisticStyleWrapper>
    )
}

export default memo(StatisticComp);