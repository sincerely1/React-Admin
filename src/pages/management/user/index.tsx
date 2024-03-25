import { Button, Card, Popconfirm, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';

import { IconButton, Iconify } from '@/components/icon';
import { useThemeToken } from '@/theme/hooks';

import { UserInfo } from '#/entity';
import { BasicStatus } from '#/enum';

const USERS: UserInfo[] = [
  {
    id: '111111',
    username: 'admin',
    email: 'xxxx@xxxx.com',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
    role: 'ADMIN_ROLE',
  },
  {
    id: '22222',
    username: 'text',
    email: 'xxxx@xxxx.com',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
    role: 'TEXT_ROLE',
  }
];

export default function RolePage() {
  const { colorTextSecondary } = useThemeToken();
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const column2s = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  
  const columns: ColumnsType<UserInfo> = [
    {
      title: 'Name',
      dataIndex: 'name',
     
      width: 300,
      render: (_, record) => {
        return (
          <div className="flex">
            <img alt="" src={record.avatar} className="h-10 w-10 rounded-full" />
            <div className="ml-2 flex flex-col">
              <span className="text-sm">{record.username}</span>
              <span style={{ color: colorTextSecondary }} className="text-xs">
                {record.email}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
     
      align: 'center',
      width: 120,
      render: (role: string) => <Tag color="cyan">{role}</Tag>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
   
      align: 'center',
      width: 120,
      render: (status) => (
        <Tag color={status === BasicStatus.DISABLE ? 'error' : 'success'}>
          {status === BasicStatus.DISABLE ? 'Disable' : 'Enable'}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      align: 'center',
      width: 100,
      render: () => (
        <div className="flex w-full justify-center text-gray">
          <IconButton onClick={() => { }}>
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm title="Delete the User" okText="Yes" cancelText="No" placement="left">
            <IconButton>
              <Iconify icon="mingcute:delete-2-fill" size={18} className="text-error" />
            </IconButton>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onCreate = () => { };

  return (
    <Card
      title="用户列表"
      extra={
        <Button type="primary" onClick={onCreate}>
          新增用户
        </Button>
      }
    >
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: 'max-content' }}
        pagination={false}
        columns={columns}
        dataSource={USERS}
      />
      <Table dataSource={dataSource} columns={column2s} />;
    </Card>
  );
}
