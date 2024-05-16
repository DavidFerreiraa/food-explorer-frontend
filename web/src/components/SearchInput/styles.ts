import { styled } from "styled-components";

export const Container = styled.div`
    width: 34.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    flex-grow: 1;

    padding: 1.6rem 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: .5rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;

export const Input = styled.input`
    background: none;
    border: none;

    field-sizing: content;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;