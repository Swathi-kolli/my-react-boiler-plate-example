import * as React from 'react';
import { render } from '@testing-library/react';

import { OuOption } from '..';

describe('<OuOption  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuOption />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
