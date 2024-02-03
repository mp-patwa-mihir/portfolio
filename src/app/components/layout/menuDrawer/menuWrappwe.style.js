import styled from "styled-components";

const MenuDrawerWrapper = styled.div(() => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    '& .close_btn': {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        span: {
            width: '1.5rem',
            height: '1.5rem',
            svg: {
                width: '1.5rem',
                height: '1.5rem',
            },
        },
    },
    '& .text_div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '& .text': {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
    },
}))

export default MenuDrawerWrapper