import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #1E1E1E;

    display: flex;
`;

export const Holder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14.2rem 10.8rem;

    flex: 1;
`;

export const Form = styled.form`
    max-width: 47.6rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 3.2rem;

    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 1.6rem;
`;

export const Legend = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;