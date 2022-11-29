import { createSlice } from "@reduxjs/toolkit";

const initialState = { total: 0, toggle: `bg-alta-orange` };

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit(state, action) {
      return {
        ...state,
        total: state.total + action.payload,
      };
    },
    withdraw(state, action) {
      return {
        ...state,
        total: state.total - action.payload,
      };
    },
    theme(state) {
      const res =
        state.toggle === `bg-alta-orange`
          ? `bg-alta-space-cadet`
          : `bg-alta-orange`;
      return {
        ...state,
        toggle: res,
      };
    },
  },
});

export const { deposit, withdraw, theme } = balanceSlice.actions;
export default balanceSlice.reducer;
