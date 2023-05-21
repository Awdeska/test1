import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

interface Customer {
    id: number;
    Passport: string;
    Surname: string;
    Mail: string;
}

interface CustomerState {
    customers: Customer[];
    loading: boolean;
    error: string | null;
}

const initialState: CustomerState = {
    customers: [],
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk<Customer[], void>('customers/fetchData', async () => {

    const response = await fetch('http://192.168.1.183:3000/api/data');
    const data: Customer[] = await response.json();
    return data;
});

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.customers = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при получении данных';
            });
    },
});

const store = configureStore({
    reducer: {
        customers: customerSlice.reducer,
    },
    // middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
