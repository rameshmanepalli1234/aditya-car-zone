import { infoIconUtils } from '@utils';
import { StyledFooter } from './style';
import { InfoBarItem } from '@containers/InfoBar/types';
import { navbarUtils } from '@utils';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { footerUtils } from '@utils';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';

const Footer = () => {
  const mockIntl = {
    formatMessage: (message: { defaultMessage: string }) =>
      message.defaultMessage,
  } as any; // Type assertion to bypass IntlShape requirements for now

  const navItems = navbarUtils(mockIntl);

  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div className="footer-top-title">Aditya Car Zone</div>
            <div className="footer-top-title-description">
              Professional carbon cleaning services delivering exceptional
              results. Trust our expertise for optimal engine performance.
            </div>
            <div className="footer-top-title-icons">
              {infoIconUtils.map((item: InfoBarItem, index: number) => (
                <span key={index} className="footer-top-title-icon">
                  <item.Icon />
                </span>
              ))}
            </div>
          </div>
          <div className="footer-top-section-links-quick-links">
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Quick </span>
              Links
            </div>
            <ul className="footer-top-section-links-list">
              {navItems.map((item, index) => (
                <li key={index} className="footer-top-section-links-list-item">
                  <MdOutlineKeyboardArrowRight className="footer-top-section-links-list-icon" />
                  <div> {item.name} </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-top-section-links">
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Our S</span>
              ervices
            </div>
            <ul className="footer-top-section-links-list">
              {footerUtils.map((item, index) => (
                <li key={index} className="footer-top-section-links-list-item">
                  <MdOutlineKeyboardArrowRight className="footer-top-section-links-list-icon" />
                  <div> {item.name} </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Our S</span>
              ervices
            </div>
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
          </div> */}
          <div>
            <div className="footer-top-section-title">
              <span className="footer-top-section-title-span"> Conta</span>ct
              Info
            </div>
            <div className="footer-top-section-contact-info-address">
              <FaLocationDot className="footer-top-section-contact-info-address-icon" />
              Near vartha office, Morampudi, Rajamahendravaram, Andhra Pradesh,
              533107.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="footer-top-section-contact-info-address">
                <FaPhone className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Call Us:
                  <div className="footer-top-section-contact-info-phone-number">
                    +91 9849199569
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="footer-top-section-contact-info-address">
                <FaEnvelope className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Email Us:
                  <div className="footer-top-section-contact-info-phone-number">
                    adityacarzone@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="footer-top-section-contact-info-address">
                <FaClock className="footer-top-section-contact-info-phone-icon" />
                <div>
                  Working Hours:
                  <div className="footer-top-section-contact-info-phone-number">
                    Mon - Sat: 9:00 AM - 9:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-c">
            © 2025 Aditya Car Zone All rights reserved.
          </div>
          <div className="footer-bottom-copyright-text">
            Design and Developed by{' '}
            <span className="footer-copyright-link">Aditya Car Zone</span> Pvt
            Ltd.
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
