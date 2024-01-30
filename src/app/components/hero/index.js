/* eslint-disable react/no-unescaped-entities */
import { memo } from "react"
import dynamic from "next/dynamic"
import { Col, Row, Typography } from "antd"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import images from "@/app/config/images"

const HeroWrapper = dynamic(() => import('./hero.style'), { ssr: false })
const { Text } = Typography

const Hero = () => {
    return (
        <HeroWrapper>
            <Row className="hero_main_row" justify={'space-between'}>
                <Col xs={24} md={15} className="hero_text_col">
                    <Text className="title hero_title">Hello, I'm</Text>
                    <TypeAnimation
                        className="type_animation"
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Mihir Patwa',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            2000,
                            'Front-end Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <div className="hire_text_div">
                        <Text className="text">
                            Hey! 👋 Welcome to my Portfolio project! You can reach me by using below clicks!
                        </Text>
                    </div>
                </Col>
                <Col xs={24} md={8} className="hero_img_col">
                    <div className="profile_img_div">
                        <Image src={images.profileImage1} fill alt='profile_img_1' placeholder="blur" blurDataURL={images.profileImage1} quality={100} priority />
                    </div>
                </Col>
            </Row>
        </HeroWrapper>
    )
}

export default memo(Hero)