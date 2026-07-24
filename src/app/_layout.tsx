import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <View
        style={{
          width: 402,
          height: 874,
          borderWidth: 3,
          borderColor: "black",
          borderRadius: 20,
          overflow: "hidden"
        }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
