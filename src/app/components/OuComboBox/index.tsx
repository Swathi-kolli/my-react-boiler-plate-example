import React, { memo } from 'react';
import { ComboBoxPropTypes } from '@ui5/webcomponents-react/webComponents/ComboBox';
import { ComboBox } from '@ui5/webcomponents-react';

export const OuComboBox = memo((props: ComboBoxPropTypes) => {
  return <ComboBox {...props}></ComboBox>;
});
