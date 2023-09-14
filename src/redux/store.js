import { createStore,combineReducers } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer,enhancer);

