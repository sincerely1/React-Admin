
import { useThemeToken } from '@/theme/hooks';
import Header from './header';
import Main from './main';
import Nav from './nav';
import { useSettings } from '@/store/settingStore';
import styled from 'styled-components';
import { ThemeMode } from '#/enum';
import { Suspense } from 'react';
import ProgressBar from '@/components/progress-bar';
import { CircleLoading } from '@/components/loading';
function DashboardLayout() {
    const { colorBgElevated, colorTextBase } = useThemeToken();
    const { themeMode } = useSettings();
  
    const layout = (
    <div className="flex h-screen overflow-hidden w-screen">
        <Header />
        <div className="z-50 h-full flex-shrink-0 block">
            <Nav />
        </div>
        <Main />
    </div>)
    return (
        <StyleWrapper $themeMode={themeMode}>
      <ProgressBar />

      <div
        className="flex h-screen overflow-hidden"
        style={{
          color: colorTextBase,
          background: colorBgElevated,
          transition:
            'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
      >
        <Suspense fallback={<CircleLoading />}>{layout}</Suspense>
      </div>
    </StyleWrapper>
    )

}
const StyleWrapper = styled.div<{ $themeMode?: ThemeMode }>`
  /* 设置滚动条的整体样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置滚动条宽度 */
  }

  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${(props) => (props.$themeMode === ThemeMode.Dark ? '#2c2c2c' : '#FAFAFA')};
  }

  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => (props.$themeMode === ThemeMode.Dark ? '#6b6b6b' : '#C1C1C1')};
  }

  /* 设置鼠标悬停在滚动条上的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => (props.$themeMode === ThemeMode.Dark ? '#939393' : '##7D7D7D')};
  }
`;

export default DashboardLayout;