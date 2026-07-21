import data from "@/assets/tournament.json";
import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type TournamentData = {
  id: number;
  name: string;
  organizer: { orgName: string; admin: string };
  date: string;
  location: string;
  registrationOptions: { value: string; name: string }[];
  players: { id: number; name: string }[];
  teams: { id: number; name: string }[];
};

export default function ConfirmCheckin() {
  const [tournamentInfo, SetTournamentInfo] = useState<TournamentData>({
    id: -1,
    name: "Test",
    organizer: { orgName: "Test", admin: "Test" },
    date: "",
    location: "",
    registrationOptions: [],
    players: [],
    teams: []
  });
  const [playerInfo, SetPlayerInfo] = useState<{
    name: string;
    skillLevel: string;
    options: { [name: string]: boolean };
  }>({
    name: "Test",
    skillLevel: "",
    options: {}
  });
  const {
    tournament: id,
    playerName,
    skillLevel,
    options: optionsString
  } = useLocalSearchParams<{
    tournament?: string;
    playerName?: string;
    skillLevel?: string;
    options?: string;
  }>();
  useEffect(() => {
    if (id) {
      let tournament = data.find((t) => t.id == Number.parseInt(id));
      if (tournament) {
        SetTournamentInfo(tournament);
      }
      if (playerName && skillLevel && optionsString) {
        SetPlayerInfo({
          name: playerName,
          skillLevel: skillLevel,
          options: JSON.parse(optionsString)
        });
      }
    }
  }, [tournamentInfo]);
  return (
    <View style={styles.container}>
      <PageHeader
        title={tournamentInfo.name}
        subtitle={tournamentInfo.organizer.orgName}
      />

      <PageHeader title="You're Checked In!" subtitle="Status: Match-Ready" />
      <StatusBox
        type="confirm"
        title="You're In!"
        detail="Waiting for Round 1 assignment"
      />
      <StatusBox
        title="Player Card"
        detail={`${playerInfo.name} | ${playerInfo.skillLevel} | ${tournamentInfo.registrationOptions
          .filter((option) => playerInfo.options[option.value])
          .map((option) => option.name)}`}
      />
      <StatusBox
        title="Next update appears here"
        detail="Court, team, start time, and any organizer messages."
      />
      <Button type="light">Get the app</Button>
      <Button>Go to Player Dashboard</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto",
    gap: 10
  }
});
