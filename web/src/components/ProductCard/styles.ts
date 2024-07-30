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

    input[type=number]{ //remove arrows from input type number in mozzila browser
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { //remove arrow from input type number in all others browsers
    -webkit-appearance: none;
    margin: 0;
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
`;

export const ClickableContainer = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    appearance: none;
`;

export const ProdTitle = styled.h3`
    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const ProdDescription = styled.p`
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const ProdPrice = styled.p`
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.CAKE_200};
`;

export const ProdQuantityContainer = styled.div`
    width: 100%;
    height: 4.8rem;

    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    margin-top: 1.5rem;
`;

export const ProdQuantityButton = styled.button`
    height: 100%;

    background: none;
    border: none;
    appearance: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const ProdQuantityInput = styled.input`
    width: 2.4rem;
    height: 100%;

    background: none;
    border: none;

    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;