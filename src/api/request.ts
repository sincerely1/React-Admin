import { message as Message } from "antd";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { t } from "@/locales/i18n";

import { Result } from "#/api";
import { ResultEnum } from "#/enum";
import { getStringItem } from "@/utils/storage";
import { StorageEnum } from "#/enum";

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 在请求被发送之前做些什么
    const isToken = (config.headers || {}).isToken === false;
    const token = getStringItem(StorageEnum.Token);
    if (token && isToken) {
      config.headers["Authorization"] = "Bearer " + token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // 请求错误时做些什么
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    if (!res.data) throw new Error(t("sys.api.apiRequestFailed"));

    const { code, data, message } = res.data;
    // 业务请求成功
    const hasSuccess =
      data && Reflect.has(res.data, "code") && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return data;
    }

    // 业务请求错误
    throw new Error(message || t("sys.api.apiRequestFailed"));
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};
    let errMsg = "";
    try {
      errMsg = response?.data?.message || message;
    } catch (error) {
      throw new Error(error as unknown as string);
    }
    // 对响应错误做点什么
    if (errMsg == "") {
      errMsg = t("sys.api.errorMessage");
    }
    Message.error(errMsg);
    return Promise.reject(error);
  }
);


export default async function request<T>(config: AxiosRequestConfig) {
  return service.request<T>(config)

}
