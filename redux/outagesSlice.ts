import { IOutages } from "@/pages/api/models/Outage/IOutages";
import { fetchOutages } from "@/services/outages";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IOutagesState {
  outages: IOutages[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: IOutagesState = {
  outages: [],
  status: "idle",
  error: null,
};

export const fetchOutageAsync = createAsyncThunk(
  "outages/fetchoutages",
  async () => {
    // console.log("Fetching outages...");
    const outages = await fetchOutages();
    // console.log("Fetched outages: ", outages);
    return outages;
  }
);

export const outagesSlice = createSlice({
  name: "outages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOutageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.outages = action.payload;
      })
      .addCase(fetchOutageAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const selectOutages = (state: RootState) => state.outages.outages;
export const selectOutagesStatus = (state: RootState) => state.outages.status;
export const selectOutagesError = (state: RootState) => state.outages.error;

export default outagesSlice.reducer;
