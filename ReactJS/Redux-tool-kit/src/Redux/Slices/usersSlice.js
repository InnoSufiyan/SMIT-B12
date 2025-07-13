import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  count: 96,
  isLoading: false,
  theme: 'Dark'
}

// slice = reducer + actionHandler
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    darkTheme: (state) => {
      state.theme = 'Dark'
    },
    lightTheme: (state) => {
      state.theme = 'Light'
    },
    counterIncrement: (state) => {
      state.count = state.count + 1
    },
    addUsers: (state, action) => {
      state.users = action.payload
    }
  }
})


export const {darkTheme, lightTheme, counterIncrement, addUsers} = usersSlice.actions

export const apiCall =  () => async (dispatch) => {
  try {
    const data = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')

    console.log(data.data.data, "==>> data")
    dispatch(addUsers(data.data.data))
  } catch (error) {
    
  }
}

export default usersSlice.reducer