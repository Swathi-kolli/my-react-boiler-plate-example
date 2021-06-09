import * as React from 'react';
import { render } from '@testing-library/react';

import { OuForm } from '..';

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

describe('<OuForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
