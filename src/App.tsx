import { I18nextProvider } from 'react-i18next';
import { NextUIProvider } from '@nextui-org/react';
import i18nInstance from '@locales/i18next.init';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../firebase.config';

import './App.css';
function App() {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <NextUIProvider>
          <div>hola</div>
        </NextUIProvider>
      </FirebaseAppProvider>
    </I18nextProvider>
  );
}

export default App;
