import styled from 'styled-components';

// Wrapper para o layout geral
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;  /* Empilha os elementos (header, conteúdo e footer) verticalmente */
  min-height: 100vh;  /* Garante que o layout ocupe 100% da altura da tela */
`;

// Wrapper para o conteúdo principal, que vai ocupar o espaço restante
export const ContentWrapper = styled.div`
  flex-grow: 1;  /* Faz o conteúdo ocupar o espaço restante entre o header e o footer */
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
`;
