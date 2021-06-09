import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { VariantManagement } from '@ui5/webcomponents-react';
import { VariantManagementPropTypes } from '@ui5/webcomponents-react/components/VariantManagement';

export const OuVariantManagement = memo((props: VariantManagementPropTypes) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <VariantManagement {...props}></VariantManagement>;
});
