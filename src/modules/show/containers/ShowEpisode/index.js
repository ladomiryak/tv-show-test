import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./ShowEpisode";
import * as showActions from "../../actions";
import { showSelectors } from "../../selectors";

const mapStateToProps = (state) => ({
  episode: showSelectors.getShowEpisode(state),
  error: showSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchShowEpisode: showActions.fetchShowEpisode,
    },
    dispatch
  );

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ConnectedComponent;
