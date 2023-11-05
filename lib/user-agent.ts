export const ua =
  (typeof window !== "undefined" && window.navigator.userAgent) || "";
export const getKeyControl = () => {
  const keyControls = {
    Mac: "⌘",
    Windows: "Ctrl",
    Android: "",
    Linux: "Ctrl",
    ChromeOS: "Ctrl",
  };

  const platform = window.navigator.userAgent;

  if (platform.includes("Mac")) {
    return keyControls.Mac;
  } else if (platform.includes("Windows")) {
    return keyControls.Windows;
  } else if (platform.includes("Android")) {
    return keyControls.Android;
  } else if (platform.includes("Linux")) {
    return keyControls.Linux;
  } else if (platform.includes("ChromeOS")) {
    return keyControls.ChromeOS;
  } else {
    return keyControls.Windows;
  }
};
