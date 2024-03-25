import { Tabs, TabsProps } from 'antd';

import { Iconify } from '@/components/icon';

import GeneralTab from './general-tab';
import SecurityTab from './security-tab';
import { useTranslation } from 'react-i18next';

function UserAccount() {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center">
          <Iconify icon="solar:user-id-bold" size={24} className="mr-2" />
          <span>{t('account_page.general.tabbar')}</span>
        </div>
      ),
      children: <GeneralTab />,
    },
    {
      key: '2',
      label: (
        <div className="flex items-center">
          <Iconify icon="solar:key-minimalistic-square-3-bold-duotone" size={24} className="mr-2" />
          <span>{t('account_page.security.tabbar')}</span>
        </div>
      ),
      children: <SecurityTab />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
}

export default UserAccount;
