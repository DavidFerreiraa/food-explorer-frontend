import { styled } from "styled-components";

// Container for each table-item
export const Card = styled.div`
    display: none; // Starts hidden
    border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.8rem;
    padding: 2.4rem;
    margin-bottom: 1.6rem;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.6rem;

        .status {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
        }

        .order-id {
            display: flex;

            > p {
                max-width: 5.6rem;
                text-overflow: ellipsis;
                overflow: hidden;
                font-family: 'Roboto', 'Poppins', sans-serif;
                font-weight: 400;
                text-align: left;
                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }

        .order-date {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .product-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
        margin-bottom: 0.4rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;