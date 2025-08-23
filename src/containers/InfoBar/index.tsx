import React from 'react';
import { useIntl } from 'react-intl';
import { infobarUtils } from '@utils';
import { InfoBarItem } from './types';
import { StyledInfoBar } from './style';

const InfoBar: React.FC = () => {
  const intl = useIntl();
  const items: InfoBarItem[] = infobarUtils(intl);

  return (
    <StyledInfoBar data-testid="section-infobar">
      {items.map((item: InfoBarItem, index: number) => (
        <div key={index} className="info-bar-item">
          <item.Icon size={16} />
          <span>{item.name}</span>
        </div>
      ))}
    </StyledInfoBar>
  );
};

export default InfoBar;
