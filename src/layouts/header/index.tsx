
import Color from 'color';



import LocalePicker from '@/components/locale-picker';
import BreadCrumb from './components/bread-crumb';
import { useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/theme/hooks';
import NoticeButton from './components/notice';
import SettingButton from './components/setting-button';
import AccountDropdown from './components/account-dropdown';
import SearchBar from './components/search-bar';
import { ThemeLayout } from '#/enum';
import { NAV_COLLAPSED_WIDTH, NAV_WIDTH } from '../config';
export default function Header() {

  const { themeLayout,breadCrumb } = useSettings();
  const { colorBgElevated } = useThemeToken();


  return (
    <header className='z-20 w-full' style={{
      position: 'fixed',
      backgroundColor: Color(colorBgElevated).alpha(1).toString(),
      right: '0px',
      left: 'auto',
      width:`calc(100% - ${
        themeLayout === ThemeLayout.Vertical ? NAV_WIDTH : NAV_COLLAPSED_WIDTH
      }px)`
    }}>
      <div className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
        style={{
          height: 80,
        }}>
        <div className="flex items-baseline">
          <div className="hidden md:block">{breadCrumb ? <BreadCrumb /> : null}</div>
        </div>
        <div className='flex'>
          <SearchBar />
          <LocalePicker />
          <NoticeButton />
          <SettingButton />
          <AccountDropdown />
        </div>

      </div>

    </header >
  )

}