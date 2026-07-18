import Button from "@/components/button";
import OrganizerPanel from "@/components/organizer-panel";
import PageHeader from "@/components/page-header";
import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PageHeader title="Humber Pickleball Tournament" subtitle={"Organizer"} />
      <FlatList
        style={styles.panelGrid}
        numColumns={2}
        data={[
          { mainText: "21/24" },
          { mainText: "21/24" },
          { mainText: "21/24" },
          { mainText: "21/24" }
        ]}
        renderItem={({ item }) => <OrganizerPanel text={item.mainText} />}
      />
      <Button
        type="error"
        onPress={() => router.navigate("/organizer/command-centre")}>
        Command Centre
      </Button>
      <Button
        type="warn"
        onPress={() => router.navigate("/organizer/checkin-manager")}>
        Check-in Players
      </Button>
      <Button disabled>Schedule Round 1</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: 350,
    margin: "auto"
  },
  panelGrid: { gap: 20 }
});
