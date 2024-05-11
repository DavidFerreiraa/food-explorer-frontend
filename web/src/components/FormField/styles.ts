import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    gap: .8rem;
`;

export const Input = styled.input`
    display: flex;

    padding: 1.2rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};
    
    border: ${({ theme }) => `1px solid ${theme.COLORS.DARK_900}`};
    border-radius: 5px;

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

export const Label = styled.label`
    font-family: "Roboto", "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400}
`;