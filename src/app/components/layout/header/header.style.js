import styled from "styled-components";

const HeaderWrapper = styled.div(() => ({
    width: '100%',
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    '& .header_main_row': {
        width: '100%',
        padding: '1rem',
        maxWidth: '2000px',
        margin: '0 auto',
        '& .logo_col': {
            display: 'flex',
            alignItems: 'center',
            '& .title': {
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                '@media (max-width: 576px)': {
                    fontSize: '1.5rem',
                },
            },
        },
        '& .menu_col': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1.5rem',
            '& .text': {
                fontSize: '1.25rem',
                fontWeight: 'bold',
                '@media (max-width: 576px)': {
                    fontSize: '1rem',
                },
            },
            '@media (max-width: 576px)': {
                display: 'none',
            },
        },
        '& .menu_col_res': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            span: {
                width: '1.5rem',
                height: '1.5rem',
                svg: {
                    width: '1.5rem',
                    height: '1.5rem',
                },
            },
            '@media (min-width: 577px)': {
                display: 'none',
            },
        },
    },
}))

export default HeaderWrapper;