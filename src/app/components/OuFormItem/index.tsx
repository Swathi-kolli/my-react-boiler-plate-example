import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { FormItem } from '@ui5/webcomponents-react';
import { FormItemProps } from '@ui5/webcomponents-react/components/FormItem';
import { messages } from './messages';

interface Props {}

export const OuFormItem = memo((props: FormItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <FormItem {...props}></FormItem>;
});

// const Div = styled.div``;
