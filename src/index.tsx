import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as it from 'react-intl/locale-data/it';
import { AppRouter } from './router'

import { Provider } from 'react-redux';
import { store } from './reduxStore/store';

import * as itMessages from './translations/it.json';
import * as enMessages from './translations/en.json';

addLocaleData([...en,...it]);

const messages = {
    'it': itMessages,
    'en': enMessages
};

const localeLanguage= 'it';

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={navigator.language} messages={messages[localeLanguage]}>
            {/* qui devi indicare il sottodominio (codFrontEnd-codCliente, esempio: arthur-previmedical)*/}
            <AppRouter />
        </IntlProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
