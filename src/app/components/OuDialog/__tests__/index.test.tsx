import * as React from 'react';
import { render } from '@testing-library/react';

import { OuDialog } from '..';

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

describe('<OuDialog  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuDialog />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
