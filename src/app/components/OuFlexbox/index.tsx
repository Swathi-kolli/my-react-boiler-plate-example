import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { FlexBox } from '@ui5/webcomponents-react';
import { FlexBoxPropTypes } from '@ui5/webcomponents-react/components/FlexBox';

export const OuFlexbox = memo((props: FlexBoxPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <FlexBox {...props}></FlexBox>;
});

// const Div = styled.div``;
