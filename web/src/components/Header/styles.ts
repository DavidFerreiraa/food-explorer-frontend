import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    padding: 2.8rem 0;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > img {
        width: 19.7rem;
        height: 3rem;
    }
`;
