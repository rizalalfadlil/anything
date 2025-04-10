import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTheme } from "./baseLayout"; // Import the custom hook
import { theme } from "antd";

export function ThemeForm({ setTheme }:{setTheme: (theme: any) => void}) {
  const { themeConfig, setThemeConfig } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState("dark");
  const [primaryColor, setPrimaryColor] = useState("red");
  const [radius, setRadius] = useState("0");
  const colors = [
    "red",
    "orange",
    "#ffd500",
    "green",
    "#0095ff",
    "brown",
    "purple",
    "pink",
    "teal",
  ];
  const radiusOptions = ["0px", "6px", "12px", "20px"];

  const savedTheme = {
    backgroundColor,
    primaryColor,
    radius,
  };
  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
    setThemeConfig((prev: any) => ({
      ...prev,
      algorithm:
        color === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }));
    setTheme(savedTheme); // Trigger setTheme
  };

  const handlePrimaryColorChange = (color: string) => {
    setPrimaryColor(color);
    setThemeConfig((prev: any) => ({
      ...prev,
      token: { ...prev.token, colorPrimary: color },
    }));
    setTheme(savedTheme); // Trigger setTheme
  };

  const handleRadiusChange = (radius: string) => {
    setRadius(radius);
    setThemeConfig((prev: any) => ({
      ...prev,
      token: { ...prev.token, borderRadius: parseInt(radius, 10) },
    }));
    setTheme(savedTheme); // Trigger setTheme
  };

  return (
    <div className="space-y-4">
      <p className="font-medium">Tema</p>
      <div className="space-y-2">
        <p className="text-xs">Background</p>
        <div className="flex gap-2">
          <div
            style={{ borderRadius: radius }}
            className={`w-8 transition-all duration-300 aspect-square bg-stone-900 border ${
              backgroundColor === "dark" ? "border-blue-500" : "border-gray-500"
            } text-gray-500 hover:border-2 grid place-content-center`}
            onClick={() => handleBackgroundColorChange("dark")}
          >
            <MoonOutlined />
          </div>
          <div
            style={{ borderRadius: radius }}
            className={`w-8 transition-all duration-300 aspect-square bg-white border ${
              backgroundColor === "light"
                ? "border-blue-500"
                : "border-gray-500"
            } text-gray-500 hover:border-2 rounded-md grid place-content-center`}
            onClick={() => handleBackgroundColorChange("light")}
          >
            <SunOutlined />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs">Primary Color</p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-8 aspect-square transition-all duration-300 border hover:border-2 ${
                primaryColor === color ? "border-blue-500" : "border-gray-500"
              }`}
              style={{
                backgroundColor: color,
                borderRadius: radius,
              }}
              onClick={() => handlePrimaryColorChange(color)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs">Border Radius</p>
        <div className="flex gap-2">
          {radiusOptions.map((r) => (
            <div
              key={r}
              style={{ borderRadius: r }}
              className={`w-8 aspect-square transition-all duration-300 border ${
                r === radius ? "border-blue-500" : "border-gray-500"
              } text-gray-500 hover:border-2 grid place-content-center`}
              onClick={() => handleRadiusChange(r.toString())}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
