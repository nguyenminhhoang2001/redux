import { createSlice } from "@reduxjs/toolkit";

export const in4Slice = createSlice({
  name: "in4",
  initialState: { user: {} },
  reducers: {
    in4: (state, actions) => {
      return { ...state, user: actions.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { in4 } = in4Slice.actions;

export default in4Slice.reducer;
