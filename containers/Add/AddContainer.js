import Add from '../../components/Add';
import {connect} from 'react-redux';
import { actions as fieldActions } from '../../actions/fieldActions';

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  addNewField: fieldActions.addNewField,
  addNewFieldSuccess: fieldActions.addNewFieldSuccess,
  addNewFieldFailed: fieldActions.addNewFieldFailed,
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);