import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  // repos: null,
  isErrorUser: false,
  //  isErrorRep: false,
};

export const getUser = createAsyncThunk(
  'userName/getUser',
  async (name, { getState }) => {
    let data = await fetch(`https://api.github.com/users/${name}`);

    if (data.ok) {
      let result = await data.json();
      return result;
    } else {
      let isError = getState().userName.isErrorUser;
      isError = true;
      return [];
    }
  }
);

// export const getRepos = createAsyncThunk('userName/getRepos', async name => {
//   let data = await fetch(`https://api.github.com/users/${name}/repos`);

//   let result = await data.json();
//   // console.log(result);
//   // return result.users;
// });

export const userSlice = createSlice({
  name: 'userName',
  initialState,

  extraReducers: builderUser => {
    builderUser.addCase(getUser.pending, (state, action) => {});
    builderUser.addCase(getUser.fulfilled, (state, action) => {
      state.userName = action.payload;
      state.isErrorUser = false;
    });
    builderUser.addCase(getUser.rejected, (state, action) => {
      state.isErrorUser = true;
    });
  },

  // builderRep => {
  //   builderUser.addCase(getRepos.pending, (state, action) => {});
  //   builderUser.addCase(getRepos.fulfilled, (state, action) => {
  //     state.repos = action.payload;
  //     state.isErrorRep = false;
  //   });
  //   builderUser.addCase(getRepos.rejected, (state, action) => {
  //     state.isErrorRep = true;
  //   });
  // },
});

export default userSlice.reducer;

export const usersSelector = state => state.userName;
// console.log('UserName', userName);
