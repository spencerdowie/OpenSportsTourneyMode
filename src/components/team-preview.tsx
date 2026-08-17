import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Text, View } from "react-native";

type TeamPreviewProps = {
  teamName: string;
  players: string[];
  isPlayer?: boolean;
};

export default function TeamPreview({
  teamName,
  players,
  isPlayer,
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
          <View
            key={playerName}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <MaterialDesignIcons name="circle" size={45} color="lightgrey" />
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {playerName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
