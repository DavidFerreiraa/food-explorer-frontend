import styled from "styled-components";

export const Container = styled.button<{$onlytext: boolean}>`
    width: 100%;

    padding: 1.2rem 3.2rem;

    background-color: ${({ theme, $onlytext }) => $onlytext? "transparent" : theme.COLORS.TOMATO_100};

    border: none;
    border-radius: .5rem;

    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100}
`;