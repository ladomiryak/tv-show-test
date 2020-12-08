import React from "react";
import { Provider } from "react-redux";
import IntlProvider from "./i18n/IntlProvider";
import store from "./utils/store";
import Routes from "./routes";

const App = () => (
  <Provider store={store} key="provider">
    <IntlProvider>
      <Routes />
    </IntlProvider>
  </Provider>
);

export default App;
