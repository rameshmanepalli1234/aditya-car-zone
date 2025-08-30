import { menuBarUtils } from '@/utils/MenuBarUtils';
import { StyledMenuBar } from './style';

const MenuBar: React.FC = () => {
  return (
    <StyledMenuBar>
      {menuBarUtils.map((item, index) => (
        <div key={index} className="menu-bar-item">
          {item.name}
        </div>
      ))}
    </StyledMenuBar>
  );
};

export default MenuBar;
