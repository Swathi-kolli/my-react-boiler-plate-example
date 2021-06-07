/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import { ThemeProvider } from 'styles/theme/ThemeProvider';

import reportWebVitals from 'reportWebVitals';
import { OuComboBox } from './app/components/OuComboBox';
import { OuComboBoxItem } from './app/components/OuComboBoxItem';
import { OuSelect } from './app/components/OuSelect';
import { OuOption } from 'app/components/OuOption';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';

// Initialize languages
import './locales/i18n';
import { OuMultiComboBox } from 'app/components/OuMultiComboBox';
import { OuMultiComboBoxItem } from 'app/components/OuMultiComboBoxItem';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
          <OuComboBox
            loading={false}
            placeholder="enter a value"
            filter="Contains"
            valueState={ValueState.Warning}
          >
            <OuComboBoxItem text="combo"></OuComboBoxItem>
            <OuComboBoxItem text="comboBox"></OuComboBoxItem>
            <OuComboBoxItem text="Item1"></OuComboBoxItem>
            <OuComboBoxItem text="Item2"></OuComboBoxItem>
          </OuComboBox>
          <br />
          <br />
          <OuSelect
            disabled={false}
            placeholder="enter a value"
            valueState={ValueState.Information}
          >
            <OuOption>option1</OuOption>
          </OuSelect>
          <OuMultiComboBox
            placeholder="enter a value"
            filter="Contains"
            valueState={ValueState.None}
          >
            <OuMultiComboBoxItem text="Item1"></OuMultiComboBoxItem>
            <OuMultiComboBoxItem text="Item22"></OuMultiComboBoxItem>
            <OuMultiComboBoxItem text="topic1"></OuMultiComboBoxItem>
          </OuMultiComboBox>
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
