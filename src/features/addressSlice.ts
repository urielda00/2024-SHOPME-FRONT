import { createSlice } from '@reduxjs/toolkit';
import * as Types from '../interfaces/slicesInitialStates.interface';

const initialState: Types.InitialAddressState = {
	isAddress: {
		Zip: 'test',
		City: 'test',
		Region: 'test',
		Country: 'test',
		LastName: 'test',
		FirstName: 'test',
		AddressLine: 'test',
	},
};

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		isAddress: (state, action) => {
			state.isAddress = action.payload;
		},
	},
});

export default addressSlice.reducer;
export const { isAddress } = addressSlice.actions;
