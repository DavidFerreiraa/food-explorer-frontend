import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    column-gap: 11.6rem;

    width: 100%;
    height: 100%;
    padding: 3.2rem 12.2rem;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 900px) {
        padding: 5.6rem 3.5rem;
    }
`;

export const Title = styled.h3`
    width: 100%;

    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Column = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;

    gap: 4.8rem;

    grid-column: span 4;
`;