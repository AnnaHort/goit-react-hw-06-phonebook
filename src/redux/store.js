import { createStore,combineReducers } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { addContactsReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: addContactsReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer,enhancer);

