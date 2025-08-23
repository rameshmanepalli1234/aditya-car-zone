import styled from 'styled-components';

export const StyledInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  height: 40px;

  .info-bar-item {
    color: var(--color-text-default);
  }
`;
