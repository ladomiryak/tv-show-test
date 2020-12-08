import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

export const mapStateToProps = (state) => {
  const lang = "en"; // authSelectors.getUserLanguage(state);

  return {
    locale: lang,
  };
};

const IntlProviderComponent = (props) => {
  const { locale, children } = props;

  return (
    <IntlProvider key={locale} {...props}>
      {children}
    </IntlProvider>
  );
};

export default connect(mapStateToProps)(IntlProviderComponent);
