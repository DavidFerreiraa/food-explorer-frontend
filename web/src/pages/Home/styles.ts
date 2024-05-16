import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 12.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_100};

    
`;