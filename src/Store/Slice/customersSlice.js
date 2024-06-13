import { createSlice } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../Components/Pages/Customers/const";

const initialState = {
  data: CUSTOMERS,
  visible_customer_modal: true,
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
    },
    visibleCustomerModal(state, action) {
      state.visible_customer_modal = action.payload;
    },
    createHandler(state, action) {
      state.data = [action.payload, ...state.data];
      state.visible_customer_modal = false;
    }
  }
})

export const {
  searchHandler, 
  searchLocationHandler, 
  searchProductHandler, 
  setData, 
  filterBySpent,
  visibleCustomerModal,
  createHandler
} = customersSlice.actions

export default customersSlice.reducer