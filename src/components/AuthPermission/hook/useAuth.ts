import { useCallback, useMemo } from "react";
import { useUserButtonPermission } from "@/store/userStore";

export function useAuth() {
  const authConfig = useUserButtonPermission();
  // 权限标识列表
  const authKeys = useMemo(() => {
    if (authConfig) {
      return authConfig;
    } else {
      return [];
    }
  }, [authConfig]);
  // 校验是否具备权限
  const hasAuth = useCallback(
    (auth: string) => authKeys.includes(auth),
    [authKeys]
  );

  const ret: [typeof authKeys, typeof hasAuth] = [authKeys, hasAuth];
  return ret;
}
