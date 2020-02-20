import { createStore, combineReducers} from 'redux';
import fieldReducer from '../reducers/fieldReducer';

const rootReducer = combineReducers(
  { stadium: fieldReducer }
)

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
