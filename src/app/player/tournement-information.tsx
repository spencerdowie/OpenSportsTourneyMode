import Button from "@/components/button";
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
          detail="Humber Polytechnic North Campus"
        />
      </TitledSection>
      <TitledSection title="Format">
        <FlatList
          data={[
            { title: "Type:", text: "Round Robin (4 Rounds)" },
            { title: "Mtches:", text: "2 games per match" },
            { title: "Team:", text: "Duos (Mixed skills)" }
          ]}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text>{item.title}</Text>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </TitledSection>
      <TitledSection title="Rules">
        <FlatList
          data={[
            { title: "Type:", text: "Round Robin (4 Rounds)" },
            { title: "Mtches:", text: "2 games per match" },
            { title: "Team:", text: "Duos (Mixed skills)" }
          ]}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text>{item.title}</Text>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </TitledSection>
      <TitledSection title="Organizer">
        <Text>Josh Clavir</Text>
      </TitledSection>
      <Button>
        <Text>View Team & Match Details</Text>
      </Button>
    </>
  );
}
