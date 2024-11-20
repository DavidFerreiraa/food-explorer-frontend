import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2.4rem;

    > svg {
        width: 9.6rem;
        height: 9.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;

export const Title = styled.h3`
    font-family: 'Roboto', 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;