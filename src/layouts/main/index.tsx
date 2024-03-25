import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

import { useSettings } from '@/store/settingStore';

import { NAV_WIDTH, NAV_COLLAPSED_WIDTH, HEADER_HEIGHT, MULTI_TABS_HEIGHT } from '../config';
import MultiTabs from './components/multi-tabs';

import { ThemeLayout } from '#/enum';

const Main = function () {
  const { themeStretch, themeLayout, multiTab } = useSettings();

  return (
    <Content style={{
      paddingTop: HEADER_HEIGHT + (multiTab ? MULTI_TABS_HEIGHT : 0),
      width:`calc(100% - ${
        themeLayout === ThemeLayout.Vertical ? NAV_WIDTH : NAV_COLLAPSED_WIDTH
      }px)`
    }} className="flex overflow-auto">
      <div
        className={`m-auto h-full w-full flex-grow sm:p-2 ${themeStretch ? '' : 'xl:max-w-screen-xl'
          }`}
      >
        {multiTab ? <MultiTabs /> : <Outlet />}
      </div>
    </Content>
  );
};

export default Main;
