import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Text, View } from "react-native";

export default function HomeBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        borderTopWidth: 1,
        maxHeight: 430,
        overflowY: "visible",
        marginBottom: 10,
        paddingTop: 10
      }}>
      <MaterialDesignIcons name="calendar-today" size={42} />
      <MaterialDesignIcons name="trophy" size={42} />
      <MaterialDesignIcons name="trophy" size={42} color={"white"} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 48,
          fontStyle: "italic",
          color: "#118A2B",
          position: "absolute",
          top: -5
        }}>
        O
      </Text>
      <MaterialDesignIcons name="message-processing" size={42} />
      <MaterialDesignIcons name="account-circle" size={42} />
    </View>
  );
}
