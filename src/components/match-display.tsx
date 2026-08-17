import { Pressable, StyleSheet, Text, View } from "react-native";

export type MatchInfo = {
  team1: string;
  team2: string;
  location: string;
  time: Date | string;
  status: "upcoming" | "live" | "completed";
};

export function MatchCompact(match: MatchInfo) {
  const matchTime = new Date(match.time);
  return (
    <View
      key={match.team1 + match.team2}
      style={{
        borderBottomWidth: 1.5,
        borderColor: "#646464",
        paddingVertical: 15,
        paddingHorizontal: 5
      }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>
          {match.team1} vs {match.team2}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5
        }}>
        <Text>
          {match.location}
          {" | "}
          {matchTime.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
          })}
        </Text>
        <Text style={[statusStyle.base, statusStyle[match.status]]}>
          {match.status.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

export default function MatchDetail({
  match,
  onPress
}: {
  match: MatchInfo;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View id="teams" style={styles.teamRow}>
        <Text style={styles.teamName}>Team 1</Text>
        <Text style={styles.teamName}>vs</Text>
        <Text style={styles.teamName}>Team 2</Text>
      </View>
      <View id="details" style={styles.detailRow}>
        <Text style={styles.detailLocTime}>Court 2 | 6:00 PM</Text>
        <Text style={[statusStyle.base, statusStyle["upcoming"]]}>
          Starts in 30 mins
        </Text>
      </View>
    </Pressable>
  );
}

const statusStyle = StyleSheet.create({
  base: {
    fontWeight: "bold",
    fontSize: 14,
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  upcoming: {
    color: "#646464",
    backgroundColor: "#D6D6D6"
  },
  live: {
    color: "#13732F",
    backgroundColor: "#D3FFDD"
  },
  completed: {
    color: "#3E73AA",
    backgroundColor: "#D1E7FF"
  }
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#118A2B",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#ebffe9"
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
  }
});
