import { persistReducer } from 'redux-persist';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orderSlice';
import { combineReducers } from '@reduxjs/toolkit';
import addressReducer from '../features/addressSlice';

const persistConfig = {
	storage,
	version: 1,
	key: 'root',
};

const reducer = combineReducers({
	user: userReducer,
	order: orderReducer,
	allCart: cartReducer,
	address: addressReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
