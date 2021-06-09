
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Dialog } from '@ui5/webcomponents-react';
import { DialogPropTypes } from '@ui5/webcomponents-react/webComponents/Dialog';

export const OuDialog = memo((props: DialogPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Dialog {...props}></Dialog>;
});

// const Div = styled.div``;
