import * as React from 'react';
import { render } from '@testing-library/react';

import { OuPopover } from '..';

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

describe('<OuPopover  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuPopover />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
