import { IntlShape } from 'react-intl';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import messages from '@messages';

export const infobarUtils = (intl: IntlShape) => [
  {
    name: intl.formatMessage(messages.PHONE_NUMBER),
    Icon: FaPhone,
  },
  {
    name: intl.formatMessage(messages.EMAIL),
    Icon: FaEnvelope,
  },
  {
    name: intl.formatMessage(messages.OPENING_HOURS),
    Icon: FaClock,
  },
];
