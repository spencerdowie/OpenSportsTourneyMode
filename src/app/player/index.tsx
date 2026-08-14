import data from "@/assets/tournament.json";
import Button from "@/components/button";
import MatchDetail from "@/components/match-display";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../_layout";

//Mock database schema
type TournamentData = {
  id: number;
  name: string;
  organizer: { orgName: string; admin: string };
  date: string;
  location: string;
  registrationOptions: { value: string; name: string }[];
  teams: { id: number; name: string }[];
  players: { id: number; name: string }[];
};

export default function Player() {
  const [tournamentInfo, SetTournamentInfo] = useState<TournamentData>({
    id: -1,
    name: "Test",
    organizer: { orgName: "Test", admin: "Test" },
    date: "",
    location: "",
    registrationOptions: [],
    teams: [{ id: -1, name: "" }],
    players: [{ id: -1, name: "" }]
  });
  const { tournament: id } = useLocalSearchParams<{
    tournament?: string;
  }>();
  const { name, skillLevel, options } = useContext(AppContext);
  useEffect(() => {
    if (id) {
      let tournament = data.find((t) => t.id == Number.parseInt(id));
      if (tournament) {
        SetTournamentInfo(tournament);
      }
    }
  }, [tournamentInfo]);

  return (
    <View style={{ marginHorizontal: 24 }}>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />
      <StatusBox
        type="confirm"
        title="You're Checked In"
        detail="Status: Match Ready"
      />
      <TitledSection title="Next Match">
        <MatchDetail onPress={() => router.navigate("/player/match-details")} />
      </TitledSection>
      <TitledSection title="Explore">
        <View style={{ gap: 10 }}>
          <Button
            type="light"
            onPress={() => router.navigate("/player/tournement-information")}>
            <Text>Tournament Information</Text>
          </Button>
          <Button
            type="light"
            onPress={() => router.navigate("/player/team-information")}>
            <Text>Team Information</Text>
          </Button>
          <Button
            type="light"
            onPress={() => router.navigate("/player/round-matches")}>
            <Text>Round Matches</Text>
          </Button>
        </View>
      </TitledSection>
    </View>
  );
}
