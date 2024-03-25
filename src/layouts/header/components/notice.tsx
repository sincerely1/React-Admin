
import type { MenuProps } from 'antd';
import { Badge, Dropdown, } from 'antd';

import {  useState } from 'react';
import { IconButton, Iconify } from '@/components/icon';
// import { useThemeToken } from '@/theme/hooks';

export default function NoticeButton() {
  // const themeToken = useThemeToken();
  const [count] = useState(4);
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
       <div className='px-2'>消息1</div>
      ),
    },
    {
      key: '2',
      label: (
        <div  className='px-2'>消息2</div>
      ),
    },
    {
      key: '3',
      label: (
        <div  className='px-2'>消息3</div>
      ),
    },
    {
      key: '4',
      label: (
        <div  className='px-2'>消息4</div>
      ),
    },
  ];

  return (


    <Dropdown
      placement="bottom"
      arrow
      trigger={['click']}
      menu={{ items }}
    >
      <IconButton>
        <Badge
          count={count}
          styles={{
            root: { color: 'inherit' },
            indicator: { color: '#fff' },
          }}
        >
          <Iconify icon="solar:bell-bing-bold-duotone" size={24} />
        </Badge>
      </IconButton>
    </Dropdown>

  );
}