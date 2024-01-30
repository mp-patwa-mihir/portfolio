import styled from "styled-components";

const HeroWrapper = styled.div(() => ({
    width: '100%',
    height: 'calc(100vh - 72px)',
    '@media (max-width: 576px)': {
        height: 'calc(100vh - 61.6px)',
    },
    '& .hero_main_row': {
        width: '100%',
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '4rem 6rem',
        '@media (max-width: 767px)': {
            padding: '3rem 5rem',
            gap: '3rem',
        },
        '@media (max-width: 576px)': {
            padding: '1.5rem 1.5rem',
            gap: '1.5rem',
        },
        '& .hero_text_col': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            '& .title': {
                fontSize: '3rem',
                fontWeight: 'bold',
                width: 'fit-content',
                '@media (max-width: 576px)': {
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '2rem',
                },
            },
            '& .type_animation': {
                width: 'fit-content',
                fontSize: '3rem',
                display: 'inline-block',
                fontWeight: 'bold',
                '@media (max-width: 576px)': {
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '2rem',
                },
            },
            '& .hire_text_div': {
                width: 'fit-content',
                '& .text': {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    '@media (max-width: 576px)': {
                        textAlign: 'center',
                        fontSize: '1rem',
                    },
                },
            },
        },
        '& .hero_img_col': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .profile_img_div': {
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '100%',
                '@media (max-width: 767px)': {
                    width: '80%',
                    paddingBottom: '80%',
                },
                img: {
                    objectFit: 'cover',
                    borderRadius: '25%',
                },
            },
        },
    },
}))

export default HeroWrapper;