import urljoin from 'url-join';

export const BASE_URL = process.env.PUBLIC_URL ?? '/';

export const USER_URL = urljoin(BASE_URL, ':username');

export const APP_PATHS = {
  OVERVIEW: urljoin(BASE_URL, 'overview'),
  PARK_NOW: urljoin(BASE_URL, 'parknow'),
  BOOK: urljoin(BASE_URL, 'book'),
  COOPERATION: urljoin(BASE_URL, 'cooperation'),
  HOME: urljoin(BASE_URL),
  ABOUT: urljoin(BASE_URL, 'about'),
  PRICING: urljoin(BASE_URL, 'pricing'),
  CAREER: urljoin(BASE_URL, 'career'),
  LOGIN: urljoin(BASE_URL, 'login'),
  SIGNUP: urljoin(BASE_URL, 'signup'),
  RESET_PASSWORD: urljoin(BASE_URL, 'reset-password'),
  USER: {
    BASE: USER_URL,
  },
};
