import * as React from 'react';
import { render } from '@testing-library/react';

import { OuSelect } from '..';

describe('<OuSelect  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<OuSelect />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
