import { createSlice } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../Components/Pages/Customers/const";

const initialState = {
  data: CUSTOMERS
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    searchHandler(state, action) {
      state.data = CUSTOMERS.filter(item => item.full_name.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
    },
  }
})

export const {searchHandler} = customersSlice.actions

export default customersSlice.reducer