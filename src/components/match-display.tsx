import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MatchDetail({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View id="teams" style={styles.teamRow}>
        <Text style={styles.teamName}>Team 1</Text>
        <Text style={styles.teamName}>vs</Text>
        <Text style={styles.teamName}>Team 2</Text>
      </View>
      <View id="details" style={styles.detailRow}>
        <Text style={styles.detailLocTime}>Court 2 | 6:00 PM</Text>
        <Text style={styles.detailCountdown}>Starts in 30 mins</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#118A2B",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  teamRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 24
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 24
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailLocTime: {
    color: "#646464",
    fontSize: 14,
    fontWeight: "bold"
  },
  detailCountdown: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#13732F",
    backgroundColor: "#D3FFDD",
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
