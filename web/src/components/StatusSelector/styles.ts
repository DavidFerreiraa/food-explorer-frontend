import styled from "styled-components";
import { IOrderStatus } from "../../interfaces/IOrder";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media (max-width: 900px) {
        border-radius: .5rem;
    }
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

    .selected-value {
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: 1.6rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        z-index: 1;
        pointer-events: none;
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

    @media (max-width: 900px) {
        border-radius: .5rem;
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

    color: transparent;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0)": "none; /* Removes the text shadow */

    @media (max-width: 900px) {
        border-radius: .5rem;
    }
`;

export const Option = styled.option`
    visibility: hidden;
`;

export const StatusIndicator = styled.div<{$status: string}>`
    display: inline-flex;
    align-items: center;
    gap: .8rem;

    margin-right: .7rem;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({ $status, theme }) => {
        switch ($status) {
            case IOrderStatus.Pendente:
                return theme.COLORS.TOMATO_300;
            case IOrderStatus.Pago:
                return theme.COLORS.CARROT_100;
            case IOrderStatus.Preparando:
                return theme.COLORS.CARROT_100;
            case IOrderStatus.Entregue:
                return theme.COLORS.MINT_100;
        }
    }} ;
`;