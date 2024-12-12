import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const UserStore = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  resetUser: () => set({ user: null }),
});

const useUserStore = create(persist(UserStore, {
  name: 'user',
  storage: createJSONStorage(() => sessionStorage) // 기본은 localStorage
}));

// const useUserStore = create(persist((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   resetUser: () => set({ user: null }),
// }), {
//   name: 'user',
//   storage: createJSONStorage(() => sessionStorage) // 디폴트값은 localStorage, sessionStorage를 리턴하면 세션 스토리지를 사용할 수 있음. 직렬화 시켰다가 역직렬화 시키는?
// }));

export default useUserStore;