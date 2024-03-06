import { I18nextProvider } from 'react-i18next';
import { NextUIProvider } from '@nextui-org/react';
import i18nInstance from '@locales/i18next.init';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../firebase.config';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@routes/routes';
import { AuthProvider } from './context/auth.context';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <I18nextProvider i18n={i18nInstance}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <NextUIProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </NextUIProvider>
        </FirebaseAppProvider>
      </I18nextProvider>
    </AuthProvider>
  );
}

export default App;
