import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  loader: boolean;
  loaderText: string;
  loaderExtraText: string;
  isIntroDone: boolean;
  verifiedLoader?: boolean;
}

const initialState: AppState = {
  loader: false,
  loaderText: '',
  loaderExtraText: '',
  isIntroDone: false,
  verifiedLoader: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload.loader;
      state.loaderText = action.payload.loaderText;
      state.loaderExtraText = action.payload.loaderExtraText;
      state.verifiedLoader = action.payload.verifiedLoader;
    },
    resetAppSlice: state => {
      state = { ...initialState };
    },
    setIsIntroDone: (state, action) => {
      state.isIntroDone = action.payload.isIntroDone;
    },
  },
});

export const { setLoader, resetAppSlice, setIsIntroDone } = appSlice.actions;

export default appSlice.reducer;
