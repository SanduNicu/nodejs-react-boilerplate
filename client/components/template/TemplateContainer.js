import { connect } from 'react-redux';
import Template from 'components/template/Template';

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
