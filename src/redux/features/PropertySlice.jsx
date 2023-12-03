import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../config/configAxios";

// Async action to get active properties
export const getActiveProperties = createAsyncThunk(
  "properties/getActiveProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getApi("/getActiveProperties");
      return response.data.activeProperties;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  properties: [],
  status: "idle",
  error: null,
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveProperties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getActiveProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(getActiveProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default propertySlice.reducer;
