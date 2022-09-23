import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formItem } from './types';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		salary: '',
		weekends: '',
		quarterlyPercent: '',
		newYearPercent: '',
	},
	reducers: {
		updState(state, action: PayloadAction<formItem>) {
			state.salary = action.payload.salary;
			state.weekends = action.payload.weekends;
			state.quarterlyPercent = action.payload.quarterlyPercent
				? action.payload.quarterlyPercent
				: '';
			state.newYearPercent = action.payload.newYearPercent ? action.payload.newYearPercent : '';
			console.log(
				'Из редакса',
				state.salary,
				state.weekends,
				state.quarterlyPercent,
				state.newYearPercent,
			);
		},
	},
});

export const { updState } = formSlice.actions;

export default formSlice.reducer;
