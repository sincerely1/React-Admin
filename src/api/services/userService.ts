import request from "../request";

import { UserInfo, UserToken } from "#/entity";

export interface LoginReq {
  username: string;
  password: string;
}
export interface UserInfoReq {
  username: string;
  accessToken: string;
}

export interface RegisterReq extends LoginReq {
  email: string;
}
export type LoginRes = UserToken;
export type UserInfoRes = { user: UserInfo };

export enum UserApi {
  Login = "/login",
  Logout = "/logout",
  UserInfo = "/userinfo",
  Register = "/register",
}
export function loginApi(data: LoginReq) {
  return request<LoginRes>({
    url: UserApi.Login,
    method: "POST",
    data: data,
    headers: {
      isToken: false,
    },
  });
}

export function getUserInfoApi(data: UserInfoReq) {
  return request<UserInfoRes>({
    url: UserApi.UserInfo,
    method: "POST",
    data: data,
  });
}
export function registerApi() {
  return request<LoginRes>({
    url: UserApi.Register,
    method: "POST",
  });
}
