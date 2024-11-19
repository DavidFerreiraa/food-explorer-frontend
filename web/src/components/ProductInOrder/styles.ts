import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1.6rem 0;
    gap: 1.3rem;

    width: 100%;

    > img {
        width: 7.2rem;
    }
`;

export const OrderDescriptionWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    text-align: center;

    > button {
        color: ${({ theme }) => theme.COLORS.TOMATO_400}
    }
`;

export const OrderTitle = styled.p`
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;

    text-align: start;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const OrderPrice = styled.p`
    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;

    text-align: start;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const OrderDetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;

    text-align: center;

    gap: 1rem;
`;
