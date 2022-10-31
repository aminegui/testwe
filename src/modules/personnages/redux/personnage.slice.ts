import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCharacterIdFromUrl } from '../api/helpers/personnagesHelpers';

export interface PersonnageIdState {
  personnagesId: string[];
}

const initialState: PersonnageIdState = {
  personnagesId: [],
};

export const personnagesIdSlice = createSlice({
  name: 'personnagesId',
  initialState,
  reducers: {
    setPersonnagesIdList: (state, action: PayloadAction<string[]>) => {
      state.personnagesId = action.payload.map((url) =>
        getCharacterIdFromUrl(url)
      );
    },
  },
});

export const { setPersonnagesIdList } = personnagesIdSlice.actions;

export default personnagesIdSlice.reducer;
