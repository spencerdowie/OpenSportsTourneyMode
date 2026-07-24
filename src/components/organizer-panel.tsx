import { StyleSheet, Text, View } from "react-native";

type OrgPanelProps = {
  mainText: string;
  subText: string;
  messageText?: string;
};

export default function OrganizerPanel({
  mainText,
  subText,
  messageText
}: OrgPanelProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.mainText}>{mainText}</Text>
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
