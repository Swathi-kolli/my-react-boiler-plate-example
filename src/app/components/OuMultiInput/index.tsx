/**
 *
 * OuMultiInput
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { MultiInput } from '@ui5/webcomponents-react';
import { MultiInputPropTypes } from '@ui5/webcomponents-react/webComponents/MultiInput';

export const OuMultiInput = memo((props: MultiInputPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <MultiInput {...props}></MultiInput>;
});

// const Div = styled.div``;
