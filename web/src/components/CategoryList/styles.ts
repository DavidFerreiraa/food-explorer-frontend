import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 2.4rem;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const CarouselWrapper = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ProdWrapper = styled.div`
    width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const ProdContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-flow: row nowrap;
    gap: 7rem;

    overflow-x: auto;
`;

export const CarouselButtonWrapper = styled.div`
    width: 27.8rem;
    height: 100%;

    display: flex;

    position: absolute;
    pointer-events: none;

    &.left {
        align-items: center;
        justify-content: flex-start;

        z-index: 1;
        left: 0rem;

        background: linear-gradient( to right, rgba(0, 10, 15, 100%), rgba(0, 10, 15, 0%));
    }

    &.right {
        align-items: center;
        justify-content: flex-end;
   
        z-index: 1;
        right: 0rem;

        background: linear-gradient( to left, rgba(0, 10, 15, 100%), rgba(0, 10, 15, 0%));
    }
`;

export const CarouselButton = styled.button`
    background: none;
    border: none;
    appearance: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    pointer-events: all;
`;


export const Title = styled.h1`
    align-self: self-start;

    font-family: "Poppins", "Roboto", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;