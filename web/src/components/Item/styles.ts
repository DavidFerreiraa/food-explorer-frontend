import styled from "styled-components";

export const Container = styled.div<{$isnew: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: 1.6rem;

    background-color: ${({ theme, $isnew }) => $isnew? "transparent": theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, $isnew }) => $isnew? `1px dashed ${theme.COLORS.LIGHT_500}`: "none"};
    border-radius: .8rem;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({ theme, $isnew }) => $isnew? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
        }
    }

    > input {
        height: 3.2rem;
        field-sizing: content;
        
        padding: .8rem 1.6rem;

        background: transparent;
        border: none;

        color: ${({ theme, $isnew }) => $isnew? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
`;