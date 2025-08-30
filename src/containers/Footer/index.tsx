import { infoIconUtils } from '@utils';
import { StyledFooter } from './style';
import { InfoBarItem } from '@containers/InfoBar/types';
import { navbarUtils } from '@utils';

const Footer = () => {
  const mockIntl = {
    formatMessage: (message: { defaultMessage: string }) =>
      message.defaultMessage,
  } as any; // Type assertion to bypass IntlShape requirements for now

  const navItems = navbarUtils(mockIntl);

  return (
    <StyledFooter>
      <div className="footer-container">
        <div>
          <h1>Aditya Car Zone</h1>
          <div>
            Professional carbon cleaning services delivering exceptional
            results. Trust our expertise for optimal engine performance.
          </div>
          {infoIconUtils.map((item: InfoBarItem, index: number) => (
            <item.Icon key={index} />
          ))}
        </div>
        <div>
          <h1>Quick Links</h1>
          <div>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h1>Our Services</h1>
          <div>
            <a href="#" data-testid="link-service-carbon-cleaning">
              Driving School
            </a>
            <a href="#" data-testid="link-service-carbon-cleaning">
              Carbon Cleaning
            </a>
            <a href="#" data-testid="link-service-carbon-cleaning">
              Cars Rented/Sale
            </a>
          </div>
        </div>
        <div>
          <h1>Contact Info</h1>
          <div>
            Near vartha office, Morampudi, Rajamahendravaram, Andhra Pradesh,
            533107.
          </div>
          <div>
            <div>Call Us:</div>
            <div>+91 9849199569</div>
          </div>
          <div>
            <div>Email Us:</div>
            <div>adityacarzone@gmail.com</div>
          </div>
          <div>
            <div>Working Hours:</div>
            <div>Mon - Sat: 9:00 AM - 9:00 PM</div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
