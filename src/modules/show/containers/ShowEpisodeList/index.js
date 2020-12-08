import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./ShowEpisodeList";
import * as showActions from "../../actions";
import { showSelectors } from "../../selectors";

const mapStateToProps = (state) => ({
  episodeList: showSelectors.getShowEpisodeList(state),
  show: showSelectors.getShow(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchShowEpisodeList: showActions.fetchShowEpisodeList,
    },
    dispatch
  );

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ConnectedComponent;
