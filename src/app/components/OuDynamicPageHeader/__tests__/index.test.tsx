import * as React from 'react';
import { render } from '@testing-library/react';

import { OuDynamicPageHeader } from '..';

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

describe('<OuDynamicPageHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuDynamicPageHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
