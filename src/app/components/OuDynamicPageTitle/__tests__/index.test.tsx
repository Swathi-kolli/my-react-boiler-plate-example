import * as React from 'react';
import { render } from '@testing-library/react';

import { OuDynamicPageTitle } from '..';

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

describe('<OuDynamicPageTitle  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuDynamicPageTitle />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
