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
  checkinState: { checkin: number; registered: number; waitlist: number };
  SetCheckinState: Dispatch<
    SetStateAction<{
      checkin: number;
      registered: number;
      waitlist: number;
    }>
  >;
  issue: boolean;
  SetIssueState: Dispatch<SetStateAction<boolean>>;
}>({
  name: "",
  SetName: () => {},
  skillLevel: "",
  SetSkillLevel: () => {},
  options: {},
  SetOptions: () => {},
  checkinState: { checkin: -1, registered: -1, waitlist: -1 },
  SetCheckinState: () => {},
  issue: false,
  SetIssueState: () => {},
});

export default function RootLayout() {
  const [name, SetName] = useState<string>("");
  const [skillLevel, SetSkillLevel] = useState<string>("");
  const [options, SetOptions] = useState<{ [option: string]: boolean }>({});
  const [checkinState, SetCheckinState] = useState<{
    checkin: number;
    registered: number;
    waitlist: number;
  }>({ checkin: 10, registered: 2, waitlist: 3 });
  const [issue, SetIssue] = useState<boolean>(true);

  return (
    //These Views create the 'phone' frame around the app
    <View
      style={{
        flexGrow: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          paddingTop: 65,
        }}
      >
        <AppContext.Provider
          value={{
            name: name,
            SetName: SetName,
            skillLevel: skillLevel,
            SetSkillLevel,
            options: options,
            SetOptions: SetOptions,
            checkinState: checkinState,
            SetCheckinState: SetCheckinState,
            issue: issue,
            SetIssueState: SetIssue,
          }}
        >
          {/*The actual app*/}
          <Stack screenOptions={{ headerShown: false }} />
        </AppContext.Provider>
      </View>
    </View>
  );
}
