import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  current: string
}

const initialState: ThemeState = {
  current: 'default'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<string>) => {
      state.current = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;