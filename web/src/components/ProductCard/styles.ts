import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;

    width: 30.4rem;
    height: 46.2rem;
    position: relative;

    img {
        width: 17.6rem;
    }

    svg {
        width: 3.8rem;
        height: 3.8rem;
        stroke-width: .01rem;
    }

    .favorite-icon {
        position: absolute;
        top: 1.6rem;
        right: 1.8rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .favorite-icon .favorited {
        color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    @media (max-width: 900px) {
        width: fit-content;
        height: fit-content;
        padding: 2.4rem;
        gap: 1.2rem;

        img {
            width: 8.8rem;
        }

        .favorite-icon svg {
            stroke-width: .01rem;
        }
    }
`;

export const ClickableContainer = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    appearance: none;

    @media (max-width: 900px) {
        gap: 1.2rem;
    }
`;

export const ProdTitle = styled.h3`
    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 140%;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: 900px) {
        font-size: 1.4rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

export const ProdDescription = styled.p`
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (max-width: 900px) {
        display: none;
    }
`;

export const ProdPrice = styled.p`
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.CAKE_200};

    @media (max-width: 900px) {
        font-size: 1.6rem;
    }
`;
