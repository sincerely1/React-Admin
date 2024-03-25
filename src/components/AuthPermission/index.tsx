import { useMemo } from "react";
import { useAuth } from "./hook/useAuth";


type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any;
    auth: string
};
export function AuthWrapper({ auth, children }: Props) {
    const [, hasAuth] = useAuth();
    // 计算是否有权限
    const authorized = useMemo(() => hasAuth(auth), [auth, hasAuth]);
    if (typeof children === "function") {
        return children(authorized);
    }
    // 显隐控制
    return (authorized ? children : null);
}