import { createSlice } from "@reduxjs/toolkit";

const first_user = {
  id: 1,
  first_name: 'Admin',
  last_name: 'Admin',
  email: 'admin@crm.com',
  password: '123456789',
  phone: '+996709576776',
  country: 'Россия',
  city: 'Москва',
  address: 'Линейная 1а',
  postal_code: '575757'
}

const initialState = {
  users: [first_user],
  current_user: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.current_user = action?.payload;
    },
  }
})

export const {setCurrentUser} = usersSlice.actions

export default usersSlice.reducer