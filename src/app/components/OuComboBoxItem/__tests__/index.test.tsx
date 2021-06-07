import * as React from 'react';
import { render } from '@testing-library/react';

import { OuComboBoxItem } from '..';

describe('<OuComboBoxItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuComboBoxItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
