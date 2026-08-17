import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type TeamPreviewProps = {
  teamName: string;
  players: string[];
  isPlayer?: boolean;
  link?: boolean;
};

export default function TeamPreview({
  teamName,
  players,
  isPlayer,
  link,
}: TeamPreviewProps) {
  if (isPlayer) teamName += " (Me)";
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "#13732F",
        borderRadius: 5,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          textAlign: "center",
          borderBottomWidth: 2,
        }}
      >
        {teamName}
      </Text>
      <View>
        {players.map((playerName) => (
          <Pressable
            key={playerName}
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              if (link) router.navigate("/player/team-information");
            }}
          >
            <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {playerName}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
