/**
 *
 * OuDatePicker
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { DatePicker } from '@ui5/webcomponents-react';
import { DatePickerPropTypes } from '@ui5/webcomponents-react/webComponents/DatePicker';

export const OuDatePicker = memo((props: DatePickerPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <DatePicker {...props}></DatePicker>;
});

// const Div = styled.div``;
