import { Select, GlobalToken } from 'antd';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { CSSProperties, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useBoolean } from 'react-use';

import { IconButton, SvgIcon } from '@/components/icon';
import { useFlattenedRoutes, useRouter } from '@/router/hooks';
import { useThemeToken } from '@/theme/hooks';
import { RouteMeta } from '#/router';
import Color from 'color';
export default function SearchBar() {
  const { t } = useTranslation();
  const { replace } = useRouter();
  const inputRef = useRef<any>(null);
  const [search, toggle] = useBoolean(false);
  const themeToken = useThemeToken();

  const flattenedRoutes = useFlattenedRoutes();
  const activeStyle: CSSProperties = {
    border: `1px dashed ${themeToken.colorPrimary}`,
    backgroundColor: `${Color(themeToken.colorPrimary).alpha(0.2).toString()}`,
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<RouteMeta[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handleSearch = (newValue: string) => {
    const result = flattenedRoutes.filter(
      (item) =>
        t(item.label).toLowerCase().indexOf(newValue.toLowerCase()) !== -1 ||
        item.key.toLowerCase().indexOf(newValue.toLowerCase()) !== -1,
    );
    setSearchResult(result);
    setSelectedItemIndex(0);
    setSearchQuery('');

  }
  const handleOpen = () => {
    toggle(true);
    setSearchQuery('');
    inputRef.current?.focus()
    setSelectedItemIndex(0);
  };
  const handleClose = () => {
    toggle(false);
    setSearchQuery('');
  };
  const handleSelect = (key: string) => {
    replace(key);
    handleClose();
  };
  const handleHover = (index: number) => {
    if (index === selectedItemIndex) return;
    setSelectedItemIndex(index);
  };
  const getlabelNoe = (label: string, key: string, index: number) => {
    const partsTitle = parse(t(label), match(t(label), searchQuery));
    const partsKey = parse(key, match(key, searchQuery));
    return (
      <StyledListItemButton
        key={key}
        $themetoken={themeToken}
        style={index === selectedItemIndex ? activeStyle : {}}
        onClick={() => handleSelect(key)}
        onMouseMove={() => handleHover(index)}
      >
        <div className="flex justify-between">
          <div>
            <div className="font-medium">
              {partsTitle.map((item) => (
                <span
                  key={item.text}
                  style={{
                    color: item.highlight
                      ? themeToken.colorPrimary
                      : themeToken.colorText,
                  }}
                >
                  {item.text}
                </span>
              ))}
            </div>
            <div className="text-xs">
              {partsKey.map((item) => (
                <span
                  key={item.text}
                  style={{
                    color: item.highlight
                      ? themeToken.colorPrimary
                      : themeToken.colorTextDescription,
                  }}
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </StyledListItemButton>
    );
  }
  const handleChange = () => {
    setSearchQuery('');
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <IconButton className="h-10 w-10" onClick={handleOpen}>
          <SvgIcon className='search-button' icon="search" size="20" />
        </IconButton>
        <StyledSerachBar>

          <Select
            className={[search ? "active-search-bar" : null].join('')}
            value={searchQuery}
            showSearch
            ref={inputRef}
            placeholder="Search..."
            style={{ 'width': 0, 'paddingLeft': 0, 'paddingRight': 0, 'overflow': 'hidden' }}
            defaultActiveFirstOption={false}
            suffixIcon={null}
            filterOption={false}
            onBlur={handleClose}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            options={(searchResult || []).map(({ key, label }, index) => ({
              value: key,
              label: getlabelNoe(label, key, index),
            }))}
          />
        </StyledSerachBar>

      </div>
    </>
  );
}
const StyledSerachBar = styled.div`
width:auto;
.active-search-bar{
  width:250px !important;
}
`;
const StyledListItemButton = styled.div<{ $themetoken: GlobalToken }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border-bottom: ${(props) => `1px dashed ${props.$themetoken.colorBorder}`};
  color: ${(props) => `${props.$themetoken.colorTextSecondary}`};
`;