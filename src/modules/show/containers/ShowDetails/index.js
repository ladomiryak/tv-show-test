import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./ShowDetails";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ConnectedComponent;
