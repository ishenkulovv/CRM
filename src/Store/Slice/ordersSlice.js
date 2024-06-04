import { createSlice } from "@reduxjs/toolkit";
import { ordersList } from "../../Components/Pages/Orders/const";

const initialState = {
  data: ordersList?.map(item => ({...item, checked: false})),
  remove_count: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    checkedForRemove(state, action) {
      state.data = state.data.map(item => {
        if (item.id === action.payload?.id) {
          item.checked = action.payload?.status
        }
        return item
      })
    },
    removeHandler(state, action) {
      const s = state.data.filter(item => !item.checked)
      state.remove_count = s.length === state.data.length ? true : false
      if (state.remove_count) {
        alert('Ордер танданыз!')
        return;
      }
      state.data = s;
    },
    searchHandler(state, action) {
      state.data = ordersList.filter(item => item.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
    }
  }
})

export const {checkedForRemove, removeHandler, searchHandler} = ordersSlice.actions

export default ordersSlice.reducer