import * as React from 'react';
import { render } from '@testing-library/react';

import { OuMultiInput } from '..';

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

describe('<OuMultiInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuMultiInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
