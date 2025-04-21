export default ({ config }) => {
  const APP_VARIANT = process.env.APP_VARIANT;

  let nameSuffix = "";
  let bundleSuffix = "";
  let slugSuffix = "";

  if (APP_VARIANT === "development") {
    nameSuffix = " (Dev)";
    bundleSuffix = ".dev";
    slugSuffix = "-dev";
  } else if (APP_VARIANT === "preview") {
    nameSuffix = " (Preview)";
    bundleSuffix = ".preview";
    slugSuffix = "-preview";
  }

  return {
    ...config,
    name: "RN Expo 2025" + nameSuffix,
    slug: "rn-expo-2025" + slugSuffix,
    version: "1.0.0",
    orientation: "default",
    icon: "./assets/images/icon.png",
    scheme: "rn-expo-2025",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.kemaladitya.rnexpo2025",
    },
    android: {
      orientation: "default",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.kemaladitya.rnexpo2025",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "0ad56793-5b5d-4d01-aef0-945e63898ca2",
      },
    },
    owner: "kemaladitya",
  };
};
