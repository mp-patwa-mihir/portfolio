import styled from "styled-components";

const AboutStyleWrapper = styled.div(() => ({
    '& .about_main_row': {
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
        '& .image_col': {
            display: 'flex',
            alignItems: 'center',
            '& .image_div': {
                width: '100%',
                height: '0%',
                paddingBottom: '100%',
                position: 'relative',
                img: {
                    borderRadius: '1rem',
                },
            },
        },
        '& .about_details_col': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1rem',
            '@media (max-width: 767px)': {
                alignItems: 'flex-start',
                gap: '0.5rem',
            },
            '& .title': {
                fontWeight: 'bold',
                fontSize: '3rem',
                '@media (max-width: 576px)': {
                    fontSize: '2rem',
                },
            },
            '& .text': {
                fontWeight: 'bold',
                fontSize: '1.5rem',
                textAlign: 'center',
                '@media (max-width: 767px)': {
                    textAlign: 'start',
                },
                '@media (max-width: 576px)': {
                    fontSize: '1rem',
                },
            },
        },
    },
}))

export default AboutStyleWrapper