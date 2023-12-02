import {configureStore} from '@reduxjs/toolkit';
import appSlice from './components/appSearchSlice';
import appSearchSlice from './components/appSearchSlice';
const store = configureStore({
 reducer:{
    app: appSlice,
    search: appSearchSlice
 }
})

export default store;