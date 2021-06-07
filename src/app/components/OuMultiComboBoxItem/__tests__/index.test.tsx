import * as React from 'react';
import { render } from '@testing-library/react';

import { OuMultiComboBoxItem } from '..';

describe('<OuMultiComboBoxItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuMultiComboBoxItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
