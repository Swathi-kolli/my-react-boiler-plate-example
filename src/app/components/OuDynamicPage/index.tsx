
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { DynamicPage } from '@ui5/webcomponents-react'
import { DynamicPageProps } from '@ui5/webcomponents-react/components/DynamicPage';

export const OuDynamicPage = memo((props: DynamicPageProps) => {
  const { t, i18n } = useTranslation();

  return <DynamicPage {...props}></DynamicPage>;
});

// const Div = styled.div``;
