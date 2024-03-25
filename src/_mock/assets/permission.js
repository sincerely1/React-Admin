import { PermissionType } from "#/enum";

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
  id: "9100714781927703",
  parentId: "",
  label: "sys.menu.dashboard",
  name: "Dashboard",
  icon: "ic-analysis",
  type: PermissionType.MENU,
  route: "dashboard",
  order: 1,
  component: "/dashboard/index.tsx",
};

const MENU_LEVEL_PERMISSION = {
  id: "0194818428516575",
  parentId: "",
  label: "sys.menu.menulevel.index",
  name: "Menu Level",
  icon: "ic-menulevel",
  type: PermissionType.CATALOGUE,
  route: "menu-level",
  order: 5,
  children: [
    {
      id: "0144431332471389",
      parentId: "0194818428516575",
      label: "sys.menu.menulevel.1a",
      name: "Menu Level 1a",
      type: PermissionType.MENU,
      route: "menu-level-1a",
      component: "/menu-level/menu-level-1a/index.tsx",
    },
    {
      id: "7572529636800586",
      parentId: "0194818428516575",
      label: "sys.menu.menulevel.1b.index",
      name: "Menu Level 1b",
      type: PermissionType.CATALOGUE,
      route: "menu-level-1b",
      children: [
        {
          id: "3653745576583237",
          parentId: "7572529636800586",
          label: "sys.menu.menulevel.1b.2a",
          name: "Menu Level 2a",
          type: PermissionType.MENU,
          route: "menu-level-2a",
          component: "/menu-level/menu-level-1b/menu-level-2a/index.tsx",
        },
        {
          id: "4873136353891364",
          parentId: "7572529636800586",
          label: "sys.menu.menulevel.1b.2b.index",
          name: "Menu Level 2b",
          type: PermissionType.CATALOGUE,
          route: "menu-level-2b",
          children: [
            {
              id: "4233029726998055",
              parentId: "4873136353891364",
              label: "sys.menu.menulevel.1b.2b.3a",
              name: "Menu Level 3a",
              type: PermissionType.MENU,
              route: "menu-level-3a",
              component:
                "/menu-level/menu-level-1b/menu-level-2b/menu-level-3a/index.tsx",
            },
            {
              id: "3298034742548454",
              parentId: "4873136353891364",
              label: "sys.menu.menulevel.1b.2b.3b",
              name: "Menu Level 3b",
              type: PermissionType.MENU,
              route: "menu-level-3b",
              component:
                "/menu-level/menu-level-1b/menu-level-2b/menu-level-3b/index.tsx",
            },
          ],
        },
      ],
    },
  ],
};
const ERRORS_PERMISSION = {
  id: "9406067785553476",
  parentId: "",
  label: "sys.menu.error.index",
  name: "Error",
  icon: "ic-error-page",
  type: PermissionType.CATALOGUE,
  route: "error",
  order: 6,
  children: [
    {
      id: "8557056851997154",
      parentId: "9406067785553476",
      label: "sys.menu.error.403",
      name: "403",
      type: PermissionType.MENU,
      route: "403",
      component: "/error/Page403.tsx",
    },
    {
      id: "5095669208159005",
      parentId: "9406067785553476",
      label: "sys.menu.error.404",
      name: "404",
      type: PermissionType.MENU,
      route: "404",
      component: "/error/Page404.tsx",
    },
    {
      id: "0225992135973772",
      parentId: "9406067785553476",
      label: "sys.menu.error.500",
      name: "500",
      type: PermissionType.MENU,
      route: "500",
      component: "/error/Page500.tsx",
    },
  ],
};
const ACCOUNT_PERMISSION = {
  id: "0901673425580518",
  parentId: "",
  label: "sys.menu.account",
  name: "Account",
  icon: "ic-userInfo",
  type: PermissionType.MENU,
  route: "account",
  order: 3,
  component: "/account/index.tsx",
};
const MANAGEMENT_PERMISSION={
  id: "7568423658954562",
  parentId: "",
  label: "sys.menu.management",
  name: "Permission",
  icon: "ic-management",
  type: PermissionType.CATALOGUE,
  route: "Permission",
  order: 2,
  children:[
    {
      id: '1689241785490759',
      parentId: '7568423658954562',
      label: 'sys.menu.permission.role',
      name: 'Role',
      type: PermissionType.MENU,
      route: 'role',
      component: '/management/role/index.tsx',
    },
    {
      id: '0157880245365433',
      parentId: '7568423658954562',
      label: 'sys.menu.permission.user',
      name: 'User',
      type: PermissionType.MENU,
      route: 'user',
      component: '/management/user/index.tsx',
    },
    {
      id: '0579995445365433',
      parentId: '7568423658954562',
      label: 'sys.menu.permission.user',
      name: 'buttonPermission',
      type: PermissionType.MENU,
      route: 'buttonPermission',
      component: '/management/button/index.tsx',
    },
  ]

}
export const PERMISSION_LIST = [
  DASHBOARD_PERMISSION,
  ACCOUNT_PERMISSION,
  MENU_LEVEL_PERMISSION,
  ERRORS_PERMISSION,
  MANAGEMENT_PERMISSION
];
