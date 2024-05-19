import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;

    margin-top: 1.6rem;

    padding: 1.3rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    
    border: ${({ theme }) => `1px solid ${theme.COLORS.DARK_900}`};
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    appearance: none;
    resize: none;

    &::placeholder {
        font-family: "Roboto", "Poppins", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_500}
    }

    &:focus {
        border: ${({ theme }) => `1px solid ${theme.COLORS.LIGHT_100}`};
    }
`;