import { createSlice } from '@reduxjs/toolkit';
import * as Types from '../interfaces/slicesInitialStates.interface';

// API's function- in case the user is logged in- to affect on the mongoDB:
import { createOrderAPI } from '../services/Checkout/checkout';
import { createOrderNoUserAPI } from '../services/Checkout/noUserLogged';

// Check if the user is logged:
const isLogged: Types.IsLoggedAndUserName = window.sessionStorage.getItem('isLogged');
const userName: Types.IsLoggedAndUserName = window.sessionStorage.getItem('userName');

const initialState: Types.InitialOrderState = {
	test: 'test',
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		placeOrder: (state, action) => {
			isLogged === 'true'
				? createOrderAPI(action.payload.isAddress, action.payload.cart, action.payload.userName)
				: createOrderNoUserAPI(action.payload.isAddress, action.payload.cart);
		},
	},
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
