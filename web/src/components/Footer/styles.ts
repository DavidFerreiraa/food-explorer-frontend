import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 12.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    p {
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: 900px) {
        padding: 0 2.4rem;

        img {
            width: 14.2rem;
            height: 1.5rem;
        }

        p {
            font-size: 1.4rem;
        }
    }
`;