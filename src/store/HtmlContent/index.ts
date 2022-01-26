import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HtmlContentState {
  content: string
}

const initialState: HtmlContentState = {
  content: ''
};

const htmlContentSlice = createSlice({
  name: 'htmlContent',
  initialState: initialState,
  reducers: {
    update: (state: HtmlContentState, action: PayloadAction<string>) => {
      state.content = action.payload;
    }
  }
});

export const { update } = htmlContentSlice.actions;
export default htmlContentSlice.reducer;