import { IOutages } from "@/pages/api/models/Outage/IOutages";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICalendar {
  outages: IOutages[];
}
const initialState: ICalendar = {
  outages: [],
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    loadOutages: (state, action: PayloadAction<IOutages[]>) => {
      state.outages = action.payload;
    },
  },
});

export const { loadOutages } = calendarSlice.actions;

export default calendarSlice.reducer;
