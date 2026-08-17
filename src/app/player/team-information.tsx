import { MatchCompact, MatchInfo } from "@/components/match-display";
import PageHeader from "@/components/page-header";
import TeamPreview from "@/components/team-preview";
import TitledSection from "@/components/titled-section";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const TeamNameConst = "Team 1";
const RoundDataConst: MatchInfo[] = [
  {
    team1: "Team 1",
    team2: "Team 2",
    location: "Court 2",
    status: "live",
    time: new Date("mon jun 26, 2026 18:00")
  },
  {
    team1: "Team 1",
    team2: "Team 4",
    location: "Court 1",
    status: "upcoming",
    time: new Date("mon jun 26, 2026 21:00")
  },
  {
    team1: "Team 1",
    team2: "Team 6",
    location: "Court 4",
    status: "completed",
    time: new Date("mon jun 26, 2026 17:00")
  },
  {
    team1: "Team 5",
    team2: "Team 1",
    location: "Court 5",
    status: "completed",
    time: new Date("mon jun 26, 2026 16:00")
  },
  {
    team1: "Team 3",
    team2: "Team 1",
    location: "Court 3",
    status: "completed",
    time: new Date("mon jun 26, 2026 15:00")
  }
];

export default function TeamInformation() {
  const [roundData, SetRoundData] = useState<MatchInfo[]>([]);
  const [teamName, SetTeamName] = useState<string>("");

  useEffect(() => {
    SetRoundData(RoundDataConst);
    SetTeamName(TeamNameConst);
  }, []);

  return (
    <>
      <PageHeader
        title="Your Team"
        subtitle={teamName}
        backBtn={() => router.navigate("/player")}
      />
      <TeamPreview
        teamName={teamName}
        players={["Player W (Me)", "Player X"]}
      />
      <TitledSection title="Statistics">
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>3</Text>
            <Text style={{ fontSize: 14 }}>Played</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>2</Text>
            <Text style={{ fontSize: 14 }}>Wins</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>1</Text>
            <Text style={{ fontSize: 14 }}>Losses</Text>
          </View>
        </View>
      </TitledSection>
      <TitledSection title="Matches">
        {roundData.map((match) => MatchCompact(match))}
      </TitledSection>
    </>
  );
}
