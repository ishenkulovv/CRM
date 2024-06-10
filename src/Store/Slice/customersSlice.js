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
    searchLocationHandler(state, action) {
      state.data = CUSTOMERS.filter(item => !action.payload?.value ? item : item?.location?.toLowerCase()?.trim() === action.payload?.value?.toLowerCase()?.trim())
    },
    setData(state, action) {
      state.data = action.payload;
    },
    searchProductHandler(state, action) {
      state.data = CUSTOMERS.filter(item => !action.payload?.value ? item : item?.type_product?.toLowerCase()?.trim() === action.payload?.value?.toLowerCase()?.trim())
    },
    filterBySpent(state, action) {
      state.data = CUSTOMERS.filter(item => !action.payload?.value ? item : Number(item.spent) > Number(action.payload.value))
    }
  }
})

export const {searchHandler, searchLocationHandler, searchProductHandler, setData, filterBySpent} = customersSlice.actions

export default customersSlice.reducer