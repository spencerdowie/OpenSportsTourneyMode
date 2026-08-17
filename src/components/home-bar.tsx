import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Text, View } from "react-native";

export default function HomeBar() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <MaterialDesignIcons name="calendar-today" size={48} />
      <MaterialDesignIcons name="trophy" size={48} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 48,
          fontStyle: "italic",
          color: "#118A2B"
        }}>
        O
      </Text>
      <MaterialDesignIcons name="message-processing" size={48} />
      <MaterialDesignIcons name="account-circle" size={48} />
    </View>
  );
}
