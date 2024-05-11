import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as Types from '../interfaces/slicesInitialStates.interface';

const initialState: Types.InitialUserState = {
	profile: '',
	user: false,
	userId: false,
	isAdmin: false,
	loginError: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logged: (state, action) => {
			state.user = true;
			state.isAdmin = false;
			state.loginError = false;
			state.userId = action.payload;
		},

		errorLogged: (state, action: PayloadAction<string>) => {
			//state.user = false;
			state.userId = false;
			//state.isAdmin = false;
			state.loginError = action.payload;
		},

		loggedOut: (state) => {
			state.user = false;
			state.userId = false;
			state.isAdmin = false;
			state.loginError = false;
			window.localStorage.clear();
			window.sessionStorage.clear();
			window.location.replace('/login');
		},

		isAdmin: (state, action) => {
			state.userId = action.payload;
			state.user = true;
			state.isAdmin = true;
			state.loginError = false;
		},
	},
});

export const { logged, errorLogged, loggedOut, isAdmin } = userSlice.actions;
export default userSlice.reducer;
