import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    padding: 3.6rem 2.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    > img {
        width: 100%;
        margin-right: 2.4rem;
    }
`;

export const MenuItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 3.6rem;
`;

export const MenuItem = styled(Link)`
    width: 100%;
    padding: 1rem;

    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;