import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  userId: string;
  profileImg: string;
}

const initialState: UserState = {
  id: -1,
  userId: "82611ffc-dac7-4da6-9533-176ce39fb1db",
  profileImg:
    "https://mblogthumb-phinf.pstatic.net/MjAyMjA4MTBfMjMz/MDAxNjYwMTMyNTMyMzQy.x1iSV4yW9mWb9HjVn5-DcsJNzwXDT6Am-STJsSnkL6wg.JdyqIGRVhNp6S8qqNx_RY80FEMVJozJk2aadxLgInR0g.JPEG.happppy_/Screenshot%EF%BC%BF20220809%EF%BC%8D215540%EF%BC%BFInstagram.jpg?type=w800",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.id = state.id;
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
