import { App, Button, Form, Input } from 'antd';

import Card from '@/components/card';
import { useTranslation } from 'react-i18next';

type FieldType = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};
export default function SecurityTab() {
  const { notification } = App.useApp();
  const { t } = useTranslation();
  const initFormValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  const handleClick = () => {
    notification.success({
      message: 'Update success!',
      duration: 3,
    });
  };

  return (
    <Card className="!h-auto flex-col">
      <Form
        layout="vertical"
        initialValues={initFormValues}
        labelCol={{ span: 8 }}
        className="w-full"
      >
        <Form.Item<FieldType> label={t('account_page.security.oldPasswordLable')} name="oldPassword">
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> label={t('account_page.security.newPasswordLable')}name="newPassword">
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> label={t('account_page.security.confirmPasswordLable')} name="confirmPassword">
          <Input.Password />
        </Form.Item>
      </Form>
      <div className="flex w-full justify-end">
        <Button type="primary" onClick={handleClick}>
        {t('account_page.security.saveButton')}
        </Button>
      </div>
    </Card>
  );
}
