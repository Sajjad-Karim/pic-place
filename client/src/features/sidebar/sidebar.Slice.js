import { createSlice } from "@reduxjs/toolkit";
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
    tab: "",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});
export default sidebarSlice.reducer;
export const { toggleSidebar, setTab } = sidebarSlice.actions;
