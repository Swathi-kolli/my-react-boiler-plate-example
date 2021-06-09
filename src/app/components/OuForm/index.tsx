import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { FormPropTypes } from '@ui5/webcomponents-react/components/Form';
import { Form } from '@ui5/webcomponents-react';

export const OuForm = memo((props: FormPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Form {...props}></Form>;
});

// const Div = styled.div``;
