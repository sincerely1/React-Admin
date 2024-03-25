import { AuthWrapper } from "@/components/AuthPermission"
import { Button, Card } from "antd"

export default function showButtonPermission() {

    return (
        <Card title="按钮权限">
            <p className="p-2">默认Admin 有增删改查的权,text只有查询权限</p>
            <div className="flex justify-around">
            <AuthWrapper auth="ADD">
                {(authorized:boolean) => <Button type="primary" disabled={!authorized}>增加</Button>}
            </AuthWrapper>
            <AuthWrapper auth="DELETE">
                {(authorized:boolean) => <Button danger type="primary" disabled={!authorized}>删除</Button>}
            </AuthWrapper>
            <AuthWrapper auth="CHANGE">
                {(authorized:boolean) => <Button type="primary" disabled={!authorized}>修改</Button>}
            </AuthWrapper>
            <AuthWrapper auth="SEARCH">
                {(authorized:boolean) => <Button type="primary" disabled={!authorized}>查询</Button>}
            </AuthWrapper>
            </div>
           

        </Card>
    )
}
