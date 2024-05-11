import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 14.2rem 10.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Holder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        max-width: 28rem;
    }

    flex: 1;
`;

export const Form = styled.form`
    max-width: 47.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: clamp(1.6rem, 3.2rem, 6.4rem);

    padding: clamp(1.6rem, 3.2rem, 6.4rem);

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 1.6rem;

    @media (max-width: 375px) {
        padding: 3.2rem;
    }
`;

export const Legend = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;