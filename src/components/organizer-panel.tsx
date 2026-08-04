import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { StyleSheet, Text, View } from "react-native";

type OrgPanelProps = {
  warn?: boolean;
  mainText: string;
  subText: string;
  messageText?: string;
};

export default function OrganizerPanel({
  warn,
  mainText,
  subText,
  messageText
}: OrgPanelProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.mainText}>
        {mainText}
        {warn && (
          <MaterialDesignIcons
            name="help-circle"
            color="#C88C2C"
            size={36}
            style={{ position: "absolute" }}
          />
        )}
      </Text>
      <Text style={styles.subHeader}>{subText}</Text>
      <Text style={styles.messageText}>{messageText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 36,
    fontWeight: "bold"
  },
  subHeader: {
    fontSize: 20
  },
  messageText: {
    fontSize: 11
  }
});
