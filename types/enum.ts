export enum BasicStatus {
    DISABLE,
    ENABLE,
  }
  
  export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 404,
    TIMEOUT = 401,
  }
  
  export enum StorageEnum {
    Token = 'token',
    Settings = 'settings',
    I18N = 'i18nextLng',
    User = "User",
  }
  
  export enum ThemeMode {
    Light = 'light',
    Dark = 'dark',
  }
  
  export enum ThemeLayout {
    Vertical = 'vertical',
    Mini = 'mini',
  }
  
  export enum ThemeColorPresets {
    Default = 'default',
    Cyan = 'cyan',
    Purple = 'purple',
    Blue = 'blue',
    Orange = 'orange',
    Red = 'red',
  }
  
  export enum LocalEnum {
    en_US = 'en_US',
    zh_CN = 'zh_CN',
  }
  
  export enum MultiTabOperation {
    FULLSCREEN = 'fullscreen',
    REFRESH = 'refresh',
    CLOSE = 'close',
    CLOSEOTHERS = 'closeOthers',
    CLOSEALL = 'closeAll',
    CLOSELEFT = 'closeLeft',
    CLOSERIGHT = 'closeRight',
  }
  
  export enum PermissionType {
    CATALOGUE,
    MENU,
    BUTTON,
  }