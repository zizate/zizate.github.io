import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "recoil/atom/atom";

const src = "https://utteranc.es";
const utterancesSelector = "iframe.utterances-frame";
const LIGHT_THEME = "github-light";
const DARK_THEME = "github-dark";
const Utterances = () => {
  const theme = useRecoilValue(themeState);
  const containerRef = useRef(null);

  useEffect(() => {
    const themeMode = theme ? LIGHT_THEME : DARK_THEME;
    const createUtterancesEl = () => {
      const comment = document.createElement("script");
      const attributes = {
        src: `${src}/client.js`,
        repo: "zizate/zizate.github.io",
        "issue-term": "title",
        label: "comment",
        theme: themeMode,
        crossOrigin: "anonymous",
        async: "true",
      };
      Object.entries(attributes).forEach(([key, value]) => {
        comment.setAttribute(key, value);
      });
      containerRef.current.appendChild(comment);
    };
    const postThemeMessage = () => {
      const message = {
        type: "set-theme",
        theme: themeMode,
      };
      utterancesEl.contentWindow.postMessage(message, src);
    };
    const utterancesEl = containerRef.current.querySelector(utterancesSelector);

    if (theme !== undefined) {
      utterancesEl ? postThemeMessage() : createUtterancesEl();
    }
    console.log("theme : ", theme);
  }, [theme, containerRef]);

  return <div ref={containerRef} className={"w-11/12 mt-20 sm:w-3/4"} />;
};
export default Utterances;
