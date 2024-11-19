import { styled } from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 8.1rem 38.1rem;

    margin-top: 3.2rem;

    width: 100%;
    height: 46.2rem;
    aspect-ratio: 4/4;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: .8rem;

    overflow: hidden;
`;

export const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-column: span 2;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_500};
`;

export const TogglePayment = styled(Button)`
    width: 100%;
    height: 100%;

    background-color: transparent;

    border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 0;

    &.selected {
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
`;

export const PaymentMethodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 5.9rem 9.1rem 4.8rem;

    grid-column: span 2;

    width: 100%;

    > :not(.selected) {
        display: none;
    }
`;

export const CreditForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3.7rem;

    width: 100%;
    height: 100%;

    input {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const ValCVCWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 1.7rem;

    width: 100%;
    height: 100%;
`;