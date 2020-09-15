import { atom, useRecoilState } from 'recoil';

import * as effects from 'store/effects';

import { themePair } from 'config';

const themeState = atom({
  key: 'themeState',
  default: localStorage.getItem('theme-mode') || 'dark',
});

function useTheme() {
  const [theme, setTheme] = useRecoilState(themeState);

  function toggle() {
    const mode = theme === themePair[0] ? themePair[1] : themePair[0];
    setTheme(mode);
    effects.theme.lsSave(mode);
  }

  return [theme, { toggle }];
}

export default useTheme;
