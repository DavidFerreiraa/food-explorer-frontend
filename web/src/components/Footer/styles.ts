import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 2;

    padding: 2.4rem 12.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;