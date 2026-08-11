import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
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
          borderBottomWidth: 2,
          borderColor: "#3B3B3B"
        }}>
        {roundTitles.map((title, index) => (
          <Pressable
            key={index}
            onPress={() => UpdateRoundFilter(index)}
            style={[
              //styles.tabs,
              roundFilter == index && { backgroundColor: "#3E73AA" }
            ]}>
            <Text>{title}</Text>
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
      <View style={{ flexGrow: 1 }}>
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
          {roundData[roundFilter].map((round, index) => (
            <View key={index}>
              <View style={{ flexDirection: "row" }}>
                <Text>{round.team1}</Text>
                <Text>vs</Text>
                <Text>{round.team2}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {round.location} |
                  {round.time.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                  })}
                </Text>
                <Text>{round.status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
