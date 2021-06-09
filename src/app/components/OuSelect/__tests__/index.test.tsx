import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { OuSelect } from '..';

describe('<OuSelect  />', () => {
  it('should match the text', () => {
    const { getByText } = render(<OuSelect name={'selectOption'} />);
    expect(getByText('select')).toHaveTextContent('selectOption');
  });
});
