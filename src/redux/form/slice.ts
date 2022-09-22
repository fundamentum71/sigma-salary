import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {} from './types';

const formSlice = createSlice({
	name: 'form',
	initialState: {},
	reducers: {
		setSort(state, action: PayloadAction) {},
	},
});

export const {} = formSlice.actions;

export default formSlice.reducer;
