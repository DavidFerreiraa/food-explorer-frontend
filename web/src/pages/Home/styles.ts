import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    padding: 0 12.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    > img {
        width: 100%;
        margin-right: 2.4rem;
    }

    @media (max-width: 900px) {
        padding: 0 0 0 2.4rem;
    }
`;