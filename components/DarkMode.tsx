import useDarkMode from "hook/useDarkMode";

const DarkMode = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div>
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={() => setIsDark(!isDark)}
          checked={isDark}
          id="slider"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
export default DarkMode;
