import { MatchCompact, MatchInfo } from "@/components/match-display";
import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
const RoundDataConst: MatchInfo[][] = [
  [
    {
      team1: "Team 1",
      team2: "Team 2",
      location: "Court 2",
      status: "live",
      time: new Date("mon jun 26, 2026 18:00"),
    },
    {
      team1: "Team 3",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("mon jun 26, 2026 20:00"),
    },
    {
      team1: "Team 5",
      team2: "Team 6",
      location: "Court 4",
      status: "completed",
      time: new Date("mon jun 26, 2026 15:00"),
    },
  ],
  [
    {
      team1: "Team 1",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("10pm"),
    },
  ],
  [
    {
      team1: "Team 1",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("10pm"),
    },
  ],
  [
    {
      team1: "Team 1",
      team2: "Team 4",
      location: "Court 1",
      status: "upcoming",
      time: new Date("10pm"),
    },
  ],
];
export default function RoundMatches() {
  const [roundData, SetRoundData] = useState<MatchInfo[][]>([[]]);
  const [roundFilter, SetRoundFilter] = useState<number>(0);

  useEffect(() => {
    SetRoundData(RoundDataConst);
  }, []);

  function UpdateRoundFilter(newRound: number) {
    const boundedRoundNumber = Math.min(
      Math.max(newRound, 0),
      roundData.length - 1,
    );
    SetRoundFilter(boundedRoundNumber);
  }

  function CreateRoundTabs(numRounds: number) {
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
          borderColor: "#646464",
        }}
      >
        {roundTitles.map((title, index) => (
          <Pressable
            key={index}
            onPress={() => UpdateRoundFilter(index)}
            style={styles.tabs}
          >
            <Text
              style={[
                roundFilter == index && {
                  fontWeight: "bold",
                  color: "#13732F",
                },
              ]}
            >
              {title}
            </Text>
            {roundFilter == index && (
              <View
                style={[
                  styles.tabLine,
                  {
                    borderColor: "#13732F",
                  },
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
        subtitle="Round 1 of 5"
        backBtn={() => router.navigate("/player")}
      />
      <View style={{ flexGrow: 1 }}>
        {CreateRoundTabs(roundData.length ?? 0)}
        <ScrollView
          id="player-list"
          style={{
            maxHeight: 650,
          }}
          contentContainerStyle={{
            overscrollBehaviorY: "contain",
            flexShrink: 1,
          }}
        >
          {roundData[roundFilter].map((match) => MatchCompact(match))}
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
    bottom: -4,
  },
  tabs: {
    flexGrow: 1,
    flexBasis: "auto",
    alignItems: "center",
    paddingBottom: 5,
  },
});
