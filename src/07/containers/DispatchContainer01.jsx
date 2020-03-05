import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions2';

const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
