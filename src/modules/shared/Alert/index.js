import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

export const Alert = ({ variant = "success", children }) => (
  <div className="alert-wrapper">
    <div className={`alert ${variant}`}>{children}</div>
  </div>
);

Alert.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "warning"]),
};
