import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Themes';
import htmlContentReducer from './HtmlContent';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    html: htmlContentReducer
  }
});