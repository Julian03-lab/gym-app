import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    NewYorkExtraLargeBold: require("../assets/fonts/NewYorkExtraLargeBold.otf"),
    NewYorkExtraLargeRegular: require("../assets/fonts/NewYorkExtraLargeRegular.otf"),
    NewYorkLargeBold: require("../assets/fonts/NewYorkLargeBold.otf"),
    NewYorkMediumBold: require("../assets/fonts/NewYorkMediumBold.otf"),
    NewYorkMediumRegular: require("../assets/fonts/NewYorkMediumRegular.otf"),
    NewYorkMediumSemibold: require("../assets/fonts/NewYorkMediumSemibold.otf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </>
  );
}
