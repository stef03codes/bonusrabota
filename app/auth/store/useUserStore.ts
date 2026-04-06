import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {User} from "@/app/auth/api/user";

interface UserState {
    user: User | null
    isLoggedIn: boolean
    setUser: (user: User) => void
    logout: () => void
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            isLoggedIn: false,
            setUser: (userData) => set({ user: userData, isLoggedIn: true }),
            logout: () => set({ user: null, isLoggedIn: false }),
        }),
        { name: 'user-storage' }
    )
)