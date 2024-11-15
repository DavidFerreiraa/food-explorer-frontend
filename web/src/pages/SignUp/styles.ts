import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 14.2rem 10.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;

        padding: 2.4rem;
    }
`;

export const Holder = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    gap: 7.3rem;

    > img {
        max-width: 28rem;
    }

    @media (max-width: 900px) {
        width: 100%;
        max-width: 100%;
        padding: 0 clamp(3.2rem, 4.7rem, 6.2rem) 0 clamp(5.2rem, 6.7rem, 8.2rem);
    }
`;

export const Form = styled.form`
    max-width: 47.6rem;
    max-height: 62.1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    gap: clamp(1.6rem, 3.2rem, 6.4rem);

    padding: clamp(3.2rem, 6.4rem, 7.2rem);

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 1.6rem;

    @media (max-width: 900px) {
        padding: clamp(3.2rem, 6.4rem, 7.2rem) 0;
        width: 100%;
        max-width: 100%;

        background-color: ${({ theme }) => theme.COLORS.DARK_100};

        > button {
            width: 100%;
        }
    }
`;

export const Legend = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: clamp(1.6rem, 3.2rem, 6.4rem);
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: 900px) {
        display: none !important;
    }
`;