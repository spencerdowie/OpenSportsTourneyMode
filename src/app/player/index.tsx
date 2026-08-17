import data from "@/assets/tournament.json";
import Button from "@/components/button";
import MatchDetail from "@/components/match-display";
import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
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
  const { tournament: id, checkin } = useLocalSearchParams<{
    tournament?: string;
    checkin?: string;
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
    <View>
      <PageHeader title="Humber Tournament Open" subtitle="Organizer" />
      {checkin && (
        <StatusBox
          type="confirm"
          title="You're Checked In"
          detail="Status: Match Ready"
        />
      )}
      <TitledSection title="Next Match">
        <MatchDetail
          onPress={() => router.navigate("/player/match-details")}
          match={{
            team1: "Team 1",
            team2: "Team 2",
            location: "Court 2",
            status: "live",
            time: "mon jun 26, 2026 18:00"
          }}
        />
      </TitledSection>
      <TitledSection title="Explore">
        <View style={{ gap: 10 }}>
          <Button
            type="light"
            onPress={() => router.navigate("/player/tournement-information")}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 14,
                paddingVertical: 12,
                alignItems: "center",
                gap: 15
              }}>
              <MaterialDesignIcons name="information-box" size={34} />
              <View
                style={{
                  alignItems: "flex-start",
                  flexGrow: 1
                }}>
                <Text
                  style={{
                    fontWeight: "semibold",
                    fontSize: 14,
                    color: "black"
                  }}>
                  Tournament Information
                </Text>
                <Text
                  style={{
                    fontWeight: "regular",
                    fontSize: 11,
                    color: "#646464"
                  }}>
                  Format, Venue, Schedule
                </Text>
              </View>
              <MaterialDesignIcons name="menu-right" size={40} />
            </View>
          </Button>
          <Button
            type="light"
            onPress={() => router.navigate("/player/team-information")}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 14,
                paddingVertical: 12,
                alignItems: "center",
                gap: 15
              }}>
              <MaterialDesignIcons name="account-group" size={34} />
              <View
                style={{
                  alignItems: "flex-start",
                  flexGrow: 1
                }}>
                <Text
                  style={{
                    fontWeight: "semibold",
                    fontSize: 14,
                    color: "black"
                  }}>
                  Team Information
                </Text>
                <Text
                  style={{
                    fontWeight: "regular",
                    fontSize: 11,
                    color: "#646464"
                  }}>
                  Your Teammate, Stats
                </Text>
              </View>
              <MaterialDesignIcons name="menu-right" size={40} />
            </View>
          </Button>
          <Button
            type="light"
            onPress={() => router.navigate("/player/round-matches")}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 14,
                paddingVertical: 12,
                alignItems: "center",
                gap: 15
              }}>
              {/* tournament */}
              <MaterialDesignIcons name="counter" size={34} />
              <View
                style={{
                  alignItems: "flex-start",
                  flexGrow: 1
                }}>
                <Text
                  style={{
                    fontWeight: "semibold",
                    fontSize: 14,
                    color: "black"
                  }}>
                  Round Matches
                </Text>
                <Text
                  style={{
                    fontWeight: "regular",
                    fontSize: 11,
                    color: "#646464"
                  }}>
                  Round Details
                </Text>
              </View>
              <MaterialDesignIcons name="menu-right" size={40} />
            </View>
          </Button>
        </View>
      </TitledSection>
    </View>
  );
}
