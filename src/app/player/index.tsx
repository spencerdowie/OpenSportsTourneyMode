import Button from "@/components/button";
import MatchDetail from "@/components/match-display";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Player() {
  const [tournamentInfo, SetTournamentInfo] = useState({
    name: "Test",
    organizer: { orgName: "Test", admin: "Test" }
  });

  return (
    <View style={{ marginHorizontal: 24 }}>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />
      <StatusBox
        type="confirm"
        title="You're Checked In"
        detail="Status: Match Ready"
      />
      <TitledSection title="Next Match">
        <MatchDetail />
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
