import * as React from 'react';
import { render } from '@testing-library/react';

import { OuMultiComboBox } from '..';

describe('<OuMultiComboBox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuMultiComboBox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
