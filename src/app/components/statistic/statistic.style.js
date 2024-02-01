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
                },
                '& .title': {
                    fontSize: '3rem',
                    fontWeight: 'bold',
                },
            },
        },
    },
}))

export default StatisticStyleWrapper