import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    column-gap: 11.6rem;

    width: 100%;
    height: 100%;
    padding: 3.2rem 12.2rem;
    
    grid-template-columns: 1fr 1fr;
    `;

export const Title = styled.h3`
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const TotalPriceDescription = styled.p`
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Column = styled.div`

`;

export const ProductWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: calc(100% / 1.3);
    max-height: 41.6rem;

    overflow-y: scroll;
    scrollbar-width: thin; /* Para navegadores que suportam (Firefox) */
    scrollbar-color: ${({ theme }) => theme.COLORS.LIGHT_400} ${({ theme }) => theme.COLORS.DARK_400}; /* Para navegadores que suportam (Firefox) */

    /* Estilos para Webkit-based browsers (Chrome, Safari, etc.) */
    &::-webkit-scrollbar {
        width: .8rem; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_100}; /* Cor da "alavanca" da barra */
        border-radius: 1rem; /* Bordas arredondadas */
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.DARK_100}; /* Cor da trilha da barra */
    }
`;