import { StyleSheet, Text, View } from "react-native";

export default function OrganizerPanel() {
  return (
    <View>
      <Text style={styles.mainText}>21/24</Text>
      <Text style={styles.subHeader}>Checked-In</Text>
      <Text style={styles.messageText}>Check-in closes in 20 min</Text>
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
