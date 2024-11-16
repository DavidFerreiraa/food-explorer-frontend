import { styled } from "styled-components";

export const Container = styled.div`
    width: calc(100%/6);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    flex-grow: 1;

    padding: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: .5rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    &:focus-within {
        justify-content: start;

        > svg {
            display: none;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        padding: 1.2rem;

        > svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;

export const Input = styled.input`
    background: none;
    border: none;
    flex-grow: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        text-align: center;
    }

    &:focus {
        &::placeholder {
            color: transparent;
        }
    }
`;