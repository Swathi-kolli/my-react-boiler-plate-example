import * as React from 'react';
import { render } from '@testing-library/react';

import { OuFormGroup } from '..';

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

describe('<OuFormGroup  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuFormGroup />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
