
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { DynamicPageHeader } from '@ui5/webcomponents-react';
import { DynamicPageHeaderProps } from '@ui5/webcomponents-react/components/DynamicPageHeader'

interface Props {}

export const OuDynamicPageHeader = memo((props: DynamicPageHeaderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <DynamicPageHeader {...props}></DynamicPageHeader>;
});

const Div = styled.div``;
