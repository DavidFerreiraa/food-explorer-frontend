import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 3.2rem 12.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    @media (max-width: 900px) {
        padding: 1.6rem 5.4rem;
    }
`;

export const ShowProductBody = styled.div`
    display: flex;
    flex-direction: column;

    > a {
        align-self: start;
    }

    @media (max-width: 900px) {
        padding: 2rem 0;
    }
`;

export const ProdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;

    padding: 4.2rem 0;

    width: 100%;

    > img {
        width: 39.011rem;
        height: 38.9rem;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
        > img {
            width: 26.4rem;
            height: 26.4rem;
        }
    }
`;

export const ProdDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    @media (max-width: 900px) {
        align-items: center;
    }
`;

export const ProdTitle = styled.h3`
    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: 900px) {
        font-size: 2.8rem;
        text-align: center;
    }
`;

export const ProdDescription = styled.p`
    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (max-width: 900px) {
        font-size: 1.6rem;
        text-align: center;
    }
`;

export const ProdIngredientWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;

    width: 100%;

    @media (max-width: 900px) {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const ProdIngredient = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;

    width: fit-content;

    padding: .4rem .8rem;

    border-radius: .5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;