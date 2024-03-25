import { faker } from '@faker-js/faker';

import { BasicStatus } from '#/enum';
import { PERMISSION_LIST } from './permission'
import { adminButton,textButton } from './button';


/**
 * User role mock
 */
const ADMIN_ROLE = {
  id: '4281707933534332',
  name: 'Admin',
  label: 'admin',
  status: BasicStatus.ENABLE,
  order: 1,
  desc: 'Super Admin',
  permission: PERMISSION_LIST,
  buttonPermission:adminButton,

};
const TEST_ROLE = {
  id: '9931665660771476',
  name: 'Test',
  label: 'test',
  status: BasicStatus.ENABLE,
  order: 2,
  desc: 'test',
  permission: PERMISSION_LIST,
  buttonPermission:textButton,
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
  id: faker.string.uuid(),
  password: '123456',
  username: 'admin',
  email: faker.internet.email(),
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: 'ADMIN_ROLE',
  permissions:ADMIN_ROLE.permission,
  buttonPermissions:ADMIN_ROLE.buttonPermission
 
};
export const TEST_USER = {
  id: faker.string.uuid(),
  username: 'test',
  password: '123456',
  email: faker.internet.email(),
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: 'TEST_ROLE',
  permissions:TEST_ROLE.permission,
  buttonPermissions:TEST_ROLE.buttonPermission
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];
