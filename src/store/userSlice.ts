import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  fullName: string;
  email: string;
  password?: string;
  phone?: string;
  company?: string;
  agency?: string;
}

interface UserState {
  registeredUsers: User[];
  currentUser: User | null;
  error: string | null;
}

const loadUsers = (): User[] => {
  const saved = localStorage.getItem('popx_users');
  const initial = [
    { fullName: 'Marry Doe', email: 'marry@gmail.com', password: 'password' }
  ];
  return saved ? JSON.parse(saved) : initial;
};

const initialState: UserState = {
  registeredUsers: loadUsers(),
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.registeredUsers.push(action.payload);
      localStorage.setItem('popx_users', JSON.stringify(state.registeredUsers));
      state.currentUser = action.payload;
      state.error = null;
    },
    login: (state, action: PayloadAction<{ email: string; password?: string }>) => {
      const user = state.registeredUsers.find(u => u.email === action.payload.email);
      if (user) {
        state.currentUser = user;
        state.error = null;
      } else {
        state.error = 'Invalid email or user not found. Please register first.';
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { register, login, logout, clearError } = userSlice.actions;
export default userSlice.reducer;
