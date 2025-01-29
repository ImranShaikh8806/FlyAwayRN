import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
}


export const SignupUser = createAsyncThunk(
    "auth/signupuser",
    async (body: { email: string; password: string; firstName:string; lastName:string }, { rejectWithValue }) => {
        try {
            const result = await axios.post("https://backend-flyaway-app.vercel.app/user/signup", body, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return result.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const signinUser = createAsyncThunk(
    "auth/signinuser",
    async (body: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const token = await AsyncStorage.getItem("token");
            const result = await axios.post("https://backend-flyaway-app.vercel.app/user/signin", body, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return result.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const addToken = createAsyncThunk(
    "auth/addtoken",
    async () => {
        const token = await AsyncStorage.getItem('token');
        return token;
    }
);

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            AsyncStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            
            .addCase(SignupUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload.error) {
                    state.error = payload.error;
                    Alert.alert(payload.error);
                } else {
                    state.token = payload.token;
                    AsyncStorage.setItem('token', payload.token);
                }
            })
           
            .addCase(addToken.fulfilled, (state, action) => {
                state.token = action.payload;
            })
           
            .addCase(signinUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload.error) {
                    state.error = payload.error;
                    Alert.alert(payload.error);
                } else {
                    state.token = payload.token;
                    AsyncStorage.setItem('token', payload.token);
                }
            })
           
            .addCase(SignupUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signinUser.pending, (state) => {
                state.isLoading = true;
            })
           
            .addCase(SignupUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload && payload.error) {
                    state.error = payload.error;
                    Alert.alert(payload.error);
                }
            })
            .addCase(signinUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload && payload.error) {
                    state.error = payload.error;
                    Alert.alert(payload.error);
                }
            })
           
    }
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
