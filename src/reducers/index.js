import { combineReducers } from 'redux';
import QuesitionStore from './quesitionStore';
import ScopeStore from './scopeStore';

export default combineReducers({
    quesition: QuesitionStore,
    scope: ScopeStore
})