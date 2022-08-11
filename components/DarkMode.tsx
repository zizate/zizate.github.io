import useDarkMode from "hook/useDarkMode";
import { ThemeContext } from "pages/_app";
import { useContext } from "react";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeState } from "recoil/atom/atom";

const DarkMode = () => {
  const [isDark, setIsDark] = useDarkMode();

  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    setTheme(!isDark);
  }, [isDark, setTheme]);

  return (
    <div>
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={() => {
            setIsDark(!isDark);
          }}
          checked={isDark}
          id="slider"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
export default DarkMode;
