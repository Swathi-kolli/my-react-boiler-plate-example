import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { FormGroup } from '@ui5/webcomponents-react';
import { FormGroupProps } from '@ui5/webcomponents-react/components/FormGroup';

interface Props {}

export const OuFormGroup = memo((props: FormGroupProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <FormGroup {...props}></FormGroup>;
});

// const Div = styled.div``;
