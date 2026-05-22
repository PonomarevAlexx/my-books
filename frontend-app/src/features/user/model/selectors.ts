import type { RootState } from "@/store/store";

export const selectIsAuth = (state: RootState) => {
    return state.user.isAuth;
};
