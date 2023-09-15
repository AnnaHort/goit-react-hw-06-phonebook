import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);














 