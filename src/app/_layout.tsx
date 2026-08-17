import { Stack } from "expo-router";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";

//Stores the state transfering between screens
export const AppContext = createContext<{
  name: string;
  SetName: Dispatch<SetStateAction<string>>;
  skillLevel: string;
  SetSkillLevel: Dispatch<SetStateAction<string>>;
  options: { [option: string]: boolean };
  SetOptions: Dispatch<SetStateAction<{ [option: string]: boolean }>>;
}>({
  name: "",
  SetName: () => {},
  skillLevel: "",
  SetSkillLevel: () => {},
  options: {},
  SetOptions: () => {}
});

export default function RootLayout() {
  const [name, SetName] = useState<string>("");
  const [skillLevel, SetSkillLevel] = useState<string>("");
  const [options, SetOptions] = useState<{ [option: string]: boolean }>({});
  return (
    //These Views create the 'phone' frame around the app
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
          overflow: "hidden",
          backgroundColor: "white",
          paddingHorizontal: 20,
          paddingTop: 65
        }}>
        <AppContext.Provider
          value={{
            name: name,
            SetName: SetName,
            skillLevel: skillLevel,
            SetSkillLevel,
            options: options,
            SetOptions: SetOptions
          }}>
          {/*The actual app*/}
          <Stack screenOptions={{ headerShown: false }} />
        </AppContext.Provider>
      </View>
    </View>
  );
}
