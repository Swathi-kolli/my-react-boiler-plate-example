import * as React from 'react';
import { render } from '@testing-library/react';

import { OuVariantManagement } from '..';

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

describe('<OuVariantManagement  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuVariantManagement />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
