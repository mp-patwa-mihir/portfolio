/* eslint-disable react/no-unescaped-entities */

/**
 * @file Hero component that displays a portfolio introduction.
 * @module components/Hero
 */

import { memo, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button, Col, Row, Typography } from "antd";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import images from "@/app/config/images";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
// Import required Swiper modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useRouter } from "next/navigation";

/**
 * Dynamically import HeroWrapper component.
 * @constant {React.Component} HeroWrapper - The HeroWrapper component.
 */
const HeroWrapper = dynamic(() => import('./hero.style'), { ssr: false });
const { Text } = Typography;

/**
 * Functional component representing the Hero section of the portfolio.
 * @function Hero
 * @returns {React.Component} The Hero component.
 */
const Hero = () => {
    const router = useRouter()
    // const email = 'mailto:patwamihir2@gmail.com';

    // const hireClick = useCallback(() => {
    //     router.push(email);
    // }, [router])

    /**
     * Render the Hero component.
     * @returns {React.Component} The rendered Hero component.
     */
    return (
        <HeroWrapper>
            <Row className="hero_main_row" justify={'space-between'}>
                <Col xs={24} md={15} className="hero_text_col">
                    <Text className="title hero_title">Hello, I'm</Text>
                    <TypeAnimation
                        className="type_animation"
                        sequence={[
                            'Mihir Patwa',
                            2000,
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
                            Hey! 👋 Welcome to my Portfolio project! You can reach me by using the options below.
                        </Text>
                    </div>
                    <div className='btn_div'>
                        <Button onClick={() => { }} className="glow-on-hover">Hire Me</Button>
                        <Button className="glow-on-hover">Download CV</Button>
                    </div>
                </Col>
                <Col xs={24} md={8} className="hero_img_col">
                    <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={false}
                        modules={[Autoplay, EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="profile_img_div">
                                <Image src={images.profileImage1} fill alt='profile_img_1' placeholder="blur" blurDataURL={images.profileImage1} quality={100} priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="profile_img_div">
                                <Image src={images.profileImage2} fill alt='profile_img_2' placeholder="blur" blurDataURL={images.profileImage1} quality={100} priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="profile_img_div">
                                <Image src={images.profileImage3} fill alt='profile_img_3' placeholder="blur" blurDataURL={images.profileImage1} quality={100} priority />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </HeroWrapper>
    );
};

export default memo(Hero);
