import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  // userName: null,
  repos: null,
  // isErrorUser: false,
  isErrorRep: false,
};

// export const getUser = createAsyncThunk('userName/getUser', async name => {
//   let data = await fetch(`https://api.github.com/users/${name}`);

//   let result = await data.json();
//   // console.log(result);
//   return result;
// });

export const getRepos = createAsyncThunk(
  'repos/getRepos',
  async (name, { getState }) => {
    let data = await fetch(`https://api.github.com/users/${name}/repos`);

    if (data.ok) {
      let result = await data.json();
      return result;
    } else {
      let isError = getState().userName.isErrorUser;
      isError = true;
      return [];
    }
    // console.log(result);
    // return result.users;
  }
);

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    sortRepositories: (state, action) => {
      state.repos.sort((a, b) => {
        if (action.payload === 'forks_count') {
          if (a[action.payload] > b[action.payload]) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (
            a[action.payload].toString().toLowerCase() >
            b[action.payload].toString().toLowerCase()
          ) {
            return action.payload === 'name' ? 1 : -1;
          } else {
            return action.payload === 'name' ? -1 : 1;
          }
        }
      });
    },
  },
  extraReducers: builderRep => {
    builderRep.addCase(getRepos.pending, (state, action) => {});
    builderRep.addCase(getRepos.fulfilled, (state, action) => {
      state.repos = action.payload;
      state.isErrorRep = false;
    });
    builderRep.addCase(getRepos.rejected, (state, action) => {
      state.isErrorRep = true;
    });
  },
});

export const { sortRepositories } = reposSlice.actions;

export default reposSlice.reducer;

export const reposSelector = state => state.repos;
// console.log('UserName', userName);
