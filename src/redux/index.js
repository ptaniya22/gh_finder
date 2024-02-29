import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import reposSlice from './user/reposSlice';

// import reposSlice from './repos/reposSlice';

export const store = configureStore({
  reducer: {
    userName: userSlice,
    repos: reposSlice,
  },
});
