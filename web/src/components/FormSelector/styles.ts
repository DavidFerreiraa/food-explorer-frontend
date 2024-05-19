import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    > svg {
        position: absolute;
        right: 0;

        margin: 1.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    
    > [data-icon="arrow-up"] {
        display: none;
        }
    > [data-icon="arrow-down"] {
        display: block;
    }

    &:has(select:focus) {
        > [data-icon="arrow-down"] {
        display: none;
        }
        > [data-icon="arrow-up"] {
            display: block;
        }
    }
`;

export const Select = styled.select`
    position: absolute;
    inset: 0;
    
    padding: 1.3rem 0 1.3rem 1.6rem;
    
    background: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    appearance: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const Option = styled.option`
`;