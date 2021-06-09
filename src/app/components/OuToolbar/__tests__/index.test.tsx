import * as React from 'react';
import { render } from '@testing-library/react';

import { OuToolbar } from '..';

describe('<OuToolbar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuToolbar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
