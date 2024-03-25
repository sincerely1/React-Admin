import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useCallback } from "react";
import { create } from "zustand";
import { useNavigate } from "react-router-dom";

import {
  LoginReq,
  UserInfoReq,
  loginApi,
  getUserInfoApi,
} from "@/api/services/userService";
import { getItem, removeItem, setItem } from "@/utils/storage";
import { useTranslation } from "react-i18next";
import { UserInfo, UserToken } from "#/entity";
import { StorageEnum } from "#/enum";
const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
type UserStore = {
  userInfo: Partial<UserInfo>;
  userToken: UserToken;
  // 使用 actions 命名空间来存放所有的 action
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (token: UserToken) => void;
    clearUserInfoAndToken: () => void;
  };
};
const useUserStore = create<UserStore>((set) => ({
  userInfo: getItem<UserInfo>(StorageEnum.User) || {},
  userToken: getItem<UserToken>(StorageEnum.Token) || {},
  actions: {
    setUserInfo: (userInfo) => {
      set({ userInfo });
      setItem(StorageEnum.User, userInfo);
    },
    setUserToken: (userToken) => {
      set({ userToken });
      setItem(StorageEnum.Token, userToken);
    },
    clearUserInfoAndToken() {
      set({ userInfo: {}, userToken: {} });
      removeItem(StorageEnum.User);
      removeItem(StorageEnum.Token);
    },
  },
}));

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserPermission = () =>
  useUserStore((state) => state.userInfo.permissions);
export const useUserActions = () => useUserStore((state) => state.actions);
export const useUserButtonPermission = () =>
  useUserStore((state) => state.userInfo.buttonPermissions);

export const useLogin = () => {
  const { setUserToken } = useUserActions();
  const { message } = App.useApp();
  const signInMutation = useMutation({ mutationFn: loginApi });

  const Login = async (data: LoginReq) => {
    try {
      const res:any = await signInMutation.mutateAsync(data);
      const { accessToken } = res;
      setUserToken({ accessToken });
      return accessToken;
    } catch (err:any) {
      message.warning({
        content: err.message,
        duration: 3,
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(Login, []);
};
export const useGetUserInfo = () => {
  const { t } = useTranslation();
  const { message, notification } = App.useApp();
  const { setUserInfo } = useUserActions();
  const navigatge = useNavigate();
  const getUserInfoMutation = useMutation({ mutationFn: getUserInfoApi });

  const getInfo = async (data: UserInfoReq) => {
    try {
      const res:any = await getUserInfoMutation.mutateAsync(data);
      // const { user } = await getUserInfoApi(data)
      setUserInfo(res.user);
      navigatge(HOMEPAGE, { replace: true });
      notification.success({
        message: t("sys.login.loginSuccessTitle"),
        description: `${t("sys.login.loginSuccessDesc")}: ${data.username}`,
        duration: 3,
      });
    } catch (err:any) {
      message.warning({
        content: err.message,
        duration: 3,
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(getInfo, []);
};
// export const useSignIn = () => {
//   const navigatge = useNavigate();
//   const { message,notification } = App.useApp();
//   const { setUserToken, setUserInfo } = useUserActions();
//   const { t } = useTranslation();
//   const signInMutation = useMutation({mutationFn:signin});

//   const signIn = async (data) => {
//     try {

//       const res = await signInMutation.mutateAsync(data);
//       const { user, accessToken } = res;
//       setUserToken({ accessToken });
//       setUserInfo(user);
//       navigatge(HOMEPAGE, { replace: true });

//       notification.success({
//         message: t('sys.login.loginSuccessTitle'),
//         description: `${t('sys.login.loginSuccessDesc')}: ${data.username}`,
//         duration: 3,
//       });
//     } catch (err) {
//       message.warning({
//         content: err.message,
//         duration: 3,
//       });
//     }
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   return useCallback(signIn, []);
// };
