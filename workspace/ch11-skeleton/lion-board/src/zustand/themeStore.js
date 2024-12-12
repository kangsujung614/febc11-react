import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const ThemeStore = (set) => ({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false, // state
  toggleTheme: () => set((state) => ({isDarkMode: !state.isDarkMode})),
  resetUser: () => set({ user: null }),
});

const useThemeStore = create(persist(ThemeStore, {
  name: 'themeStore',
}));

// const useUserStore = create(persist((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   resetUser: () => set({ user: null }),
// }), {
//   name: 'user',
//   storage: createJSONStorage(() => sessionStorage) // 디폴트값은 localStorage, sessionStorage를 리턴하면 세션 스토리지를 사용할 수 있음. 직렬화 시켰다가 역직렬화 시키는?
// }));

export default useThemeStore;