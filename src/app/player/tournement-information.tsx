import PageHeader from "@/components/page-header";
import StatusBox from "@/components/status-box";
import TitledSection from "@/components/titled-section";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function RoundMatches() {
  return (
    <>
      <PageHeader
        title="Tournament Information"
        subtitle="OpenSports"
        backBtn={() => router.navigate("/player")}
      />
      <TitledSection title="Humber Pickleball Tournament ">
        <StatusBox
          title="Mon, June 26, 2026"
          detail="04:00 PM - 10:00 PM
          
Humber Polytechnic North Campus
Court 1-6, Athletics Building"
        />
      </TitledSection>
      <TitledSection title="Format">
        <FlatList
          data={[
            { title: "Type:", text: "Round Robin (4 Rounds)" },
            { title: "Matches:", text: "2 games per match" },
            { title: "Team:", text: "Duos (Mixed skills)" }
          ]}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", minWidth: 100 }}>
                {item.title}
              </Text>
              <Text style={{ flexGrow: 1 }}>{item.text}</Text>
            </View>
          )}
        />
      </TitledSection>
      <TitledSection title="Rules">
        <FlatList
          data={[
            { title: "Scoring:", text: "Rally scoring to 11 (Win by 2)" },
            { title: "Check-in:", text: "Closes 15 mins before Round 1" },
            { title: "Court Switch:", text: "Change sides at 6 points" },
            {
              title: "Tie-Breaker",
              text: "Head-to-head, then point differential"
            }
          ]}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", minWidth: 100 }}>
                {item.title}
              </Text>
              <Text style={{ flexGrow: 1 }}>{item.text}</Text>
            </View>
          )}
        />
      </TitledSection>
      <TitledSection title="Organizer">
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Josh Clavir</Text>
        <Text>UX Design Program Coordinator</Text>
      </TitledSection>
    </>
  );
}
