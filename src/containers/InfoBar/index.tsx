import React from 'react';
import { infobarUtils } from '@utils';
import { InfoBarProps } from './types';
import { StyledInfoBar } from './style';

const InfoBar: React.FC<InfoBarProps> = () => {
  return (
    <StyledInfoBar>
      {infobarUtils.map(item => (
        <div key={item.name} className="info-bar-item">
          <item.Icon size={16} />
          <span>{item.name}</span>
        </div>
      ))}
    </StyledInfoBar>
  );
};

export default InfoBar;
