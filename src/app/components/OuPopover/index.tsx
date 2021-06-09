import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Popover } from '@ui5/webcomponents-react';
import { PopoverPropTypes } from '@ui5/webcomponents-react/webComponents/Popover';

export const OuPopover = memo((props: PopoverPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Popover {...props}></Popover>;
});

// const Div = styled.div``;
