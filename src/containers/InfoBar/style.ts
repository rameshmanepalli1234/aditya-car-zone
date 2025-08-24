import styled from 'styled-components';
import { textStyles } from '@styles/textStyles';

export const StyledInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--color-bg-tertiary);
  height: 40px;
  gap: 20px;
  overflow: hidden;
  padding: 0 50px;

  .info-bar-left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    .info-bar-item {
      color: var(--color-text-default);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      ${textStyles.bodyMediumStrong};
    }
  }

  .info-bar-right-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    color: var(--color-text-default);
    ${textStyles.headingSmallBold};
  }
`;
