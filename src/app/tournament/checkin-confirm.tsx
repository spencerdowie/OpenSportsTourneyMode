import data from "@/assets/tournament.json";
import Button from "@/components/button";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { AppContext } from "../_layout";

//Mock database schema
type TournamentData = {
  id: number;
  name: string;
  organizer: { orgName: string; admin: string };
  date: string;
  location: string;
  registrationOptions: { value: string; name: string }[];
};

export default function ConfirmCheckin() {
  const [tournamentInfo, SetTournamentInfo] = useState<TournamentData>({
    id: -1,
    name: "Test",
    organizer: { orgName: "Test", admin: "Test" },
    date: "",
    location: "",
    registrationOptions: [],
  });
  const { name, skillLevel, options } = useContext(AppContext);
  const { tournament: id } = useLocalSearchParams<{
    tournament?: string;
  }>();
  const [toggleState, SetToggleState] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      let tournament = data.find((t) => t.id == Number.parseInt(id));
      if (tournament) {
        SetTournamentInfo(tournament);
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
        detail={`${name} | ${skillLevel} | ${tournamentInfo.registrationOptions
          .filter((option) => options[option.value])
          .map((option) => option.name)}`}
      />
      <StatusBox
        title="Next update appears here"
        detail="Court, team, start time, and any organizer messages."
      />
      <View style={{ flexDirection: "row", gap: 5, alignSelf: "flex-end" }}>
        <Text style={{ fontWeight: "bold", color: "#13732F" }}>
          Notify me when assigned
        </Text>
        <Switch
          value={toggleState}
          thumbColor={toggleState ? "#13732F" : "#D9D9D9"}
          trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
          onValueChange={() => SetToggleState(!toggleState)}
        />
      </View>
      <Button type="light">Get the app</Button>
      <Button onPress={() => router.navigate("/player?checkin=true")}>
        Go to Player Dashboard
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto",
    gap: 10,
  },
});
