import { Button, Card, Popconfirm,Tag } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';


import { ROLE_LIST } from '@/_mock/assets/user';
import { IconButton, Iconify } from '@/components/icon';

import { Role } from '#/entity';
import { BasicStatus } from '#/enum';

const ROLES: Role[] = ROLE_LIST;


export default function RolePage() {

  const columns: ColumnsType<Role> = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: 'Label',
      dataIndex: 'label',
    },
    { title: 'Order', dataIndex: 'order', width: 60 },
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
    { title: 'Desc', dataIndex: 'desc' },
    {
      title: 'Action',
      key: 'operation',
      align: 'center',
      width: 100,
      render: () => (
        <div className="flex w-full justify-center text-gray">
          <IconButton onClick={() =>{}}>
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm title="Delete the Role" okText="Yes" cancelText="No" placement="left">
            <IconButton>
              <Iconify icon="mingcute:delete-2-fill" size={18} className="text-error" />
            </IconButton>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onCreate = () => {
    
  };

  return (
    <Card
      title="Role List"
      extra={
        <Button type="primary" onClick={onCreate}>
          New
        </Button>
      }
    >
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: 'max-content' }}
        pagination={false}
        columns={columns}
        dataSource={ROLES}
      />
    </Card>
  );
}
