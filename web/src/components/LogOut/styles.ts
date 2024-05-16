import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;