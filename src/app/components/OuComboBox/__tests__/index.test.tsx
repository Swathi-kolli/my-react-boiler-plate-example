import * as React from 'react';
import { render } from '@testing-library/react';

import { OuComboBox } from '..';

describe('<OuComboBox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuComboBox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
