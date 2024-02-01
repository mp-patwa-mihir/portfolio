import styled from "styled-components";

const StatisticStyleWrapper = styled.div(() => ({
    '& .stat_main_row': {
        width: '100%',
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '3rem 6rem',
        '@media (max-width: 767px)': {
            padding: '3rem 5rem',
        },
        '@media (max-width: 576px)': {
            padding: '1.5rem 1.5rem',
        },
        '& .main_col_div': {
            display: 'flex',
            width: '100%',
            border: '1px solid #fff',
            padding: '1rem 0rem',
            borderRadius: '1rem',
            '& .stat_col': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.25rem',
                '& .text': {
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    '@media (max-width: 768px)': {
                        fontSize: '2rem',
                    },
                    '@media (max-width: 576px)': {
                        fontSize: '1.5rem',
                    },
                },
                '& .title': {
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    '@media (max-width: 768px)': {
                        fontSize: '2.5rem',
                    },
                    '@media (max-width: 576px)': {
                        fontSize: '2rem',
                    },
                },
            },
        },
    },
}))

export default StatisticStyleWrapper