import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 0;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;