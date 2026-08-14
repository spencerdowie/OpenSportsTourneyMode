import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View
} from "react-native";
const RoundDataConst: {
  team1: string;
  team2: string;
  location: string;
  time: Date;
  status: "upcoming" | "live" | "completed";
}[][] = [
  [
    {
      team1: "Team 1",
      team2: "Team 2",
      location: "Court 2",
      status: "live",
      time: new Date("mon jun 26, 2026 18:00")
    },
    {
      team1: "Team 3",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("mon jun 26, 2026 20:00")
    }
  ],
  [
    {
      team1: "Team 1",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("10pm")
    }
  ]
];
type RoundData = {
  team1: string;
  team2: string;
  location: string;
  time: Date;
  status: "upcoming" | "live" | "completed";
};
export default function RoundMatches() {
  const [roundData, SetRoundData] = useState<RoundData[][]>([[]]);
  const [roundFilter, SetRoundFilter] = useState<number>(0);

  useEffect(() => {
    SetRoundData(RoundDataConst);
  }, []);

  function UpdateRoundFilter(newRound: number) {
    const boundedRoundNumber = Math.min(
      Math.max(newRound, 0),
      roundData.length - 1
    );
    SetRoundFilter(boundedRoundNumber);
  }

  function CreatRoundTabs(numRounds: number) {
    const roundTitles = [];
    for (let i = 0; i < numRounds; i++) {
      roundTitles.push(`Round ${i + 1}`);
    }
    return (
      <View
        id="checkin-tabs"
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-around",
          borderBottomWidth: 1,
          borderColor: "#646464"
        }}>
        {roundTitles.map((title, index) => (
          <Pressable
            key={index}
            onPress={() => UpdateRoundFilter(index)}
            style={styles.tabs}>
            <Text
              style={[
                roundFilter == index && {
                  fontWeight: "bold",
                  color: "#13732F"
                }
              ]}>
              {title}
            </Text>
            {roundFilter == index && (
              <View
                style={[
                  styles.tabLine,
                  {
                    borderColor: "#13732F"
                  }
                ]}
              />
            )}
          </Pressable>
        ))}
      </View>
    );
  }

  return (
    <>
      <PageHeader
        title="Round Matches"
        subtitle="Round 1 of 4"
        backBtn={() => router.navigate("/player")}
      />
      <View style={{ flexGrow: 1, paddingHorizontal: 15 }}>
        {CreatRoundTabs(roundData.length ?? 0)}
        <ScrollView
          id="player-list"
          style={{
            maxHeight: 650
          }}
          contentContainerStyle={{
            overflow: "scroll",
            flexShrink: 1
          }}>
          {roundData[roundFilter].map((match, index) => {
            const statusStyle: TextStyle[] = [
              {
                fontWeight: "bold",
                fontSize: 14,
                color: "#13732F",
                backgroundColor: "#D3FFDD",
                borderRadius: 23,
                paddingHorizontal: 10,
                paddingVertical: 5
              }
            ];
            switch (match.status) {
            }
            return (
              <View
                key={index}
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
                    {match.time.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                  </Text>
                  <Text style={statusStyle}>{match.status.toUpperCase()}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  tabLine: {
    width: "80%",
    borderWidth: 3,
    borderRadius: 6,
    borderColor: "#646464",
    position: "absolute",
    bottom: -4
  },
  tabs: {
    flexGrow: 1,
    flexBasis: "auto",
    alignItems: "center",
    paddingBottom: 5
  }
});
