/* eslint-disable react/no-unescaped-entities */

/**
 * @file Component displaying information about the developer.
 * @module About
 * @requires react
 * @requires antd
 * @requires next/image
 * @requires next/dynamic
 * @requires react
 * @requires antd
 * @requires @/app/config/images
 * @requires ./about.style
 */

import images from "@/app/config/images"
import { Col, Row } from "antd"
import Image from "next/image"
import dynamic from "next/dynamic"
import { memo } from "react"
import { Typography } from "antd"

/**
 * Dynamic import of the component's style.
 * @constant {object} AboutStyleWrapper
 */
const AboutStyleWrapper = dynamic(() => import("./about.style"), { ssr: false });


/**
 * Functional component representing the About section.
 * @function About
 * @returns {JSX.Element} React component
 */
const About = () => {
    return (
        <AboutStyleWrapper>
            <Row className="about_main_row" justify={'space-between'}>
                <Col md={11} xs={24} className="image_col">
                    <div className="image_div">
                        <Image src={images.about} fill alt="about_image" placeholder="blur" blurDataURL={images.about} />
                    </div>
                </Col>
                <Col md={12} xs={24} className="about_details_col">
                    <Typography.Text className="title">
                        About Me
                    </Typography.Text>
                    <Typography.Text className="text">
                        Passionate about crafting seamless user interfaces, I excel in React.js and Next.js development. Proficient in state management, responsive design, and API integration, I bring a dynamic skill set to front-end development. A quick learner and collaborative team player, I'm dedicated to creating outstanding web applications that push boundaries and delight users. Let's build something amazing together! 💻✨
                    </Typography.Text>
                </Col>
            </Row>
        </AboutStyleWrapper>
    )
}


/**
 * Memoized version of the About component to optimize performance.
 * @constant {function} MemoAbout
 */

export default memo(About)