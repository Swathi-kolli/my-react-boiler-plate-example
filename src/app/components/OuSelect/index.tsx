import * as React from 'react';
import { Select } from '@ui5/webcomponents-react';
import { SelectPropTypes } from '@ui5/webcomponents-react/webComponents/Select';

export function OuSelect(props: SelectPropTypes) {
  return <Select {...props}></Select>;
}
