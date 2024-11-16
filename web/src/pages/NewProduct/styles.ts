import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 3.2rem 12.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    @media (max-width: 900px) {
        padding: 2.4rem;
    }
`;

export const CreateProductBody = styled.div`
    display: flex;
    flex-direction: column;

    > a {
        align-self: start;
    }
`;

export const Title = styled.h1`
    margin-top: 2.4rem;

    font-family: "Poppins", "Roboto", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: 900px) {
        font-size: 2.8rem;
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 3.2rem;

    margin: 3.2rem 0 11.6rem;

    @media (max-width: 900px) {
        height: fit-content;
        display: flex;
        flex-direction: column;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 3;
`;

export const TextAreaContainer = styled.div`
    width: 100%;
    height: 100%;

    grid-column: 1 / 4;
    grid-row: 3 / 5;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    justify-self: end;
    gap: 3.2rem;
    width: fit-content;
    grid-column: 1 / -1;

    @media (max-width: 900px) {
        width: 100%;

        button {
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;
            text-align: center;

            padding: 1.2rem 2.4rem;

            width: 100%;
        }
    }
`;

export const IngredientsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.6rem;

    margin-top: 1.6rem;
    padding: .8rem;

    overflow-x: auto;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: .8rem;
`;