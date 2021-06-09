import * as React from 'react';
import { render } from '@testing-library/react';

import { OuFlexbox } from '..';

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

describe('<OuFlexbox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuFlexbox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
