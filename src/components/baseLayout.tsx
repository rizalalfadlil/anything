import React, { createContext, useState, useContext } from "react";
import { Button, ConfigProvider, theme } from "antd";
const ThemeContext = createContext<any>(null);

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const [themeConfig, setThemeConfig] = useState({
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "red",
      borderRadius: 0,
    },
  });
  const bgColor =
    themeConfig.algorithm === theme.darkAlgorithm
      ? ["#222222", "#1e1e1e"]
      : ["#f8f8f8", "#eeeeee"];
  const textColor =
    themeConfig.algorithm === theme.darkAlgorithm ? "#ffffff" : "#000000";
  return (
    <ThemeContext.Provider value={{ themeConfig, setThemeConfig }}>
      <ConfigProvider theme={themeConfig}>
        <main
          className="min-h-dvh flex flex-col w-screen"
          style={{ backgroundColor: bgColor[0] }}
        >
          <div className="grow p-4 grid content-center">
            <div className=" max-w-xl mx-auto w-full">{children}</div>
          </div>
          <footer
            className="p-4  gap-4 flex justify-center"
            style={{ backgroundColor: bgColor[1], color: textColor }}
          >
            <Button type="link" href="create">
              buat tes mu sendiri
            </Button>
          </footer>
        </main>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
