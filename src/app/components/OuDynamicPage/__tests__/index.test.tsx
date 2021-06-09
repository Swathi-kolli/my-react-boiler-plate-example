import * as React from 'react';
import { render } from '@testing-library/react';

import { OuDynamicPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<OuDynamicPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuDynamicPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
