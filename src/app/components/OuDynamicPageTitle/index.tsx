import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { DynamicPageTitle } from '@ui5/webcomponents-react';
import { DynamicPageTitleProps } from '@ui5/webcomponents-react/components/DynamicPageTitle';

interface Props {}

export const OuDynamicPageTitle = memo((props: DynamicPageTitleProps) => {
  const { t, i18n } = useTranslation();

  return <DynamicPageTitle {...props}></DynamicPageTitle>;
});

// const Div = styled.div``;
