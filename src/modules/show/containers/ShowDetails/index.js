import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./ShowDetails";
import * as showActions from "../../actions";
import { showSelectors } from "../../selectors";

const mapStateToProps = (state) => ({
  show: showSelectors.getShow(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchShow: showActions.fetchShow,
    },
    dispatch
  );

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ConnectedComponent;
