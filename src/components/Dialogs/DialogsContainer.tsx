import { connect } from 'react-redux';
import { compose } from 'redux';

import { AppStateType } from '../../redux/redux-store';
import { actions } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(connect(mapStateToProps, { ...actions }))(Dialogs);
