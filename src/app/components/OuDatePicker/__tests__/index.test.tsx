import * as React from 'react';
import { render } from '@testing-library/react';

import { OuDatePicker } from '..';

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

describe('<OuDatePicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuDatePicker />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
