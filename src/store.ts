import { configureStore } from '@reduxjs/toolkit';
import personnagesUrlReducer from '../src/modules/personnages/redux/personnage.slice';
export const store = configureStore({
  reducer: {
    personnagesId: personnagesUrlReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
