import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection } from '../actions/collectionActions';
import { setAge } from '../actions/collectionActions2';

const mapDispatchToProps = {
  setLoading,
  resetLoading,
  setUser,
  setCollection,
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
