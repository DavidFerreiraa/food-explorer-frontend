import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 3.2rem 12.2rem;
    
    @media (max-width: 900px) {
        padding: 5.6rem 3.5rem;
    }
`;

export const Title = styled.h3`
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: 900px) {
        
    }
`;