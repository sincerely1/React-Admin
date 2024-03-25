import { Button, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiFillGoogleCircle, AiFillWechat } from 'react-icons/ai';
import { LoginReq } from '@/api/services/userService';

import { useLogin,useGetUserInfo } from '@/store/userStore';
// import { useThemeToken } from '@/theme/hooks';
import { LoginStateEnum, useLoginStateContext } from '../providers/LoginStateProvider';

function LoginForm() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    // const themeToken = useThemeToken();
    const { loginState, setLoginState } = useLoginStateContext();
   
    const login = useLogin();
    const getUserInfo=useGetUserInfo();
    if (loginState !== LoginStateEnum.LOGIN) return null;

    const handleFinish = async ({ username, password }: LoginReq) => {
        setLoading(true);
        try {
            const accessToken=await login({ username, password });
            if (accessToken){
                await getUserInfo({username,accessToken})
            }
            
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="mb-4 text-2xl font-bold xl:text-3xl">{t('sys.login.signInFormTitle')}</div>
                <div className="self-center">
                    <span>{t("sys.login.registerText")}</span>
                    <Button type="link" onClick={() => setLoginState(LoginStateEnum.REGISTER)}>{t("sys.login.registerButton")}</Button>
                </div>

            </div>

            <Form
                name="login"
                size="large"
                initialValues={{
                    remember: true,
                    username: 'admin',
                    password: '123456',
                }}
                onFinish={handleFinish}
            >
                {/* <div className="mb-4 flex flex-col">
                    <Alert
                        type="info"
                        description={
                            <div className="flex flex-col">
                                <div className="flex">

                                    <strong className="m-1" style={{ color: themeToken.colorInfoTextHover }}>
                                        <span> Admin {t('sys.login.userName')}:</span><span>{'admin'}</span>
                                    </strong>
                                </div>

                                <div className="flex">

                                    <strong className="m-1" style={{ color: themeToken.colorInfoTextHover }}>
                                        <span>Test {t('sys.login.userName')}:</span><span>{'text'}</span>
                                    </strong>
                                </div>

                                <div>

                                    <strong className=" m-1" style={{ color: themeToken.colorInfoTextHover }}>
                                        <span>{t('sys.login.password')}:</span> <span>{'123456'}</span>
                                    </strong>
                                </div>
                            </div>
                        }
                        showIcon
                    />
                </div> */}
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: t('sys.login.accountPlaceholder') }]}
                >
                    <Input placeholder={t('sys.login.userName')} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: t('sys.login.passwordPlaceholder') }]}
                >
                    <Input.Password type="password" placeholder={t('sys.login.password')} />
                </Form.Item>
                <Form.Item>
                    <Row>
                        <Col span={12}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>{t('sys.login.rememberMe')}</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={12} className="text-right">
                            <button className="!underline" onClick={() => setLoginState(LoginStateEnum.RESET_PASSWORD)}>{t('sys.login.forgetPassword')}</button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                        {t('sys.login.loginButton')}
                    </Button>
                </Form.Item>

                <Divider className="!text-xs">{t('sys.login.otherSignIn')}</Divider>
                <div className="flex cursor-pointer justify-around text-2xl">
                    <AiFillGithub />
                    <AiFillWechat />
                    <AiFillGoogleCircle />
                </div>
            </Form>
        </div>
    )
}

export default LoginForm;