import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";

export type MatchInfo = {
  team1: string;
  team2: string;
  location: string;
  time: Date;
  status: "upcoming" | "live" | "completed";
};

export function MatchCompact(match: MatchInfo) {
  switch (match.status) {
  }
  return (
    <View
      key={match.team1 + match.team2}
      style={{
        borderBottomWidth: 1.5,
        borderColor: "#646464",
        paddingVertical: 15,
        paddingHorizontal: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>
          {match.team1} vs {match.team2}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text>
          {match.location}
          {" | "}
          {match.time.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </Text>
        <Text style={statusStyle}>{match.status.toUpperCase()}</Text>
      </View>
    </View>
  );
}

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

const statusStyle: TextStyle[] = [
  {
    fontWeight: "bold",
    fontSize: 14,
    color: "#13732F",
    backgroundColor: "#D3FFDD",
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
];

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#118A2B",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  teamRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 24,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 24,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLocTime: {
    color: "#646464",
    fontSize: 14,
    fontWeight: "bold",
  },
  detailCountdown: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#13732F",
    backgroundColor: "#D3FFDD",
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
