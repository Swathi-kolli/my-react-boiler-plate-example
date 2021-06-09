import * as React from 'react';
import { render } from '@testing-library/react';

import { OuFormItem } from '..';

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

describe('<OuFormItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuFormItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
