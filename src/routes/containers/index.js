import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Routes";

export const mapStateToProps = (state) => ({});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({}, dispatch);

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ConnectedComponent;
